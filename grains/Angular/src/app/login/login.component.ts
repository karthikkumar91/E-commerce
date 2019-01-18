import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {HttpSampleService} from '../http-sample.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData;
  constructor( private sample : HttpSampleService) { }

  ngOnInit() {
    this.formData = new FormGroup({
      user_name : new FormControl,
      user_password : new FormControl,
    })
  }
  validation(value){
    console.log(value);
    this.sample.user_login(value).subscribe((result)=>{
      console.log(result);
    })
  }
}
