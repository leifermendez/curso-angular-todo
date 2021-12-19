import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {

    this.loginForm = new FormGroup(
      {
          email: new FormControl('',[Validators.required ,Validators.email]),
          password: new FormControl('',[Validators.required,
             Validators.minLength(5),
             Validators.maxLength(12)])
      }
    )

  }

  sendCredentials():void{
    const body = this.loginForm.value;
    console.log(body)
  }

}
