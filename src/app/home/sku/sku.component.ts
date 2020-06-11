import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.css']
})
export class SkuComponent implements OnInit {
  errMessage: string;
  addSkuForm: FormGroup;
  uploadedFiles: Array <File>;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadState: Observable<string>;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private http:HttpClient , private afStorage: AngularFireStorage, private spinner: NgxSpinnerService, private toastr: ToastrService) {
    this.initializeSkuForm();
  }

  ngOnInit(): void { }

  initializeSkuForm() {
    this.addSkuForm = new FormGroup({
      skuId: new FormControl('', [Validators.required]),
      companyId: new FormControl('', [Validators.required]),
      skuName: new FormControl('', [Validators.required]),
      productName: new FormControl('',  [Validators.required] ),
      productPrice: new FormControl('', [Validators.required, Validators.pattern('[0-9]*.?[0-9]*'), Validators.min(0)]),
      //  for now hard coded brand ID 1
    });
  }

  addNewSku(skuInfo: FormGroup) {
    console.log(skuInfo.value);
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  onUpload() {
    // this.ref = this.afStorage.ref(this.uploadedFiles[0].name);
    // this.task = this.ref.put(this.uploadedFiles[0]);
    // this.uploadState = this.task.snapshotChanges().pipe(map(s => s.state));
    // this.uploadProgress = this.task.percentageChanges();
    // this.downloadURL - this.task.
    // this.uploadProgress.subscribe( data => {
    //   console.log(data);
    // })
    // this.uploadState.subscribe( data => {
    //   console.log(data);
    // })
    this.spinner.show();
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("file", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }

    formData.set('company_name', 'Tata');
    this.http.post('http://172.26.228.6:3136/tracker/upload', formData).subscribe( res => {
      if(res['status'] == 200) {
        this.spinner.hide();
        this.toastr.success(res['response']+'!');
      }
    }, err => {
      this.spinner.hide();
      this.toastr.error("Something went wrong!");
    });
    // console.log(this.uploadProgress);
  }

  onSubmit() {
    console.log("on button click")
  }

  resetFormInfo() {
    this.addSkuForm.reset();
  }

}
