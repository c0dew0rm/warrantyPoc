import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  portalLoginForm: FormGroup;
  forgotToggle = false;
  forgotPasswordForm: FormGroup;
  constructor(private route: Router) { }

  ngOnInit(): void {
    this.initializePortalLoginForm();
  }

  initializePortalLoginForm() {
    this.portalLoginForm = new FormGroup({
      email: new FormControl('', []),
      password: new FormControl(''),
    });

    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [])
    });
  }

  onLoginFormSubmit(formValue: FormGroup ) {
    console.log("Hello.")
  }

  onForgotPasswordFormSubmit(formValue: FormGroup) {
    console.log("Hie!")
  }

}
