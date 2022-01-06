import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({});

  constructor(private authService:AuthService, private router:Router) { }

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
    this.authService.submitLogin(body)
    .subscribe((response) => {
      this.router.navigate(['/','task'])
    })
    console.log(body)
  }

}
