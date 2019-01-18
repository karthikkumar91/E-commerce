import { Component, OnInit } from '@angular/core';
import {HttpSampleService} from '../http-sample.service';
import {LocalStorage,LocalStorageService} from 'ngx-webstorage';
import {CookieService} from 'ngx-cookie-service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  fail:string="";
  constructor(private sample : HttpSampleService,
    private localservice :LocalStorageService,
    private cookieservice : CookieService,
    private router : Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
  }
  validate(value){
    console.log(value);
    console.log("name:--->"+value.username)
    this.sample.login(value).subscribe((result)=>{
      console.log(result);
      var convert = result.toString();
      // console.log(convert.length);
      if(convert.length !=0){
      this.localservice.store('key',convert);
      this.cookieservice.set('check',convert,0.00138889); 
       this.router.navigate(['admin-table']);
      }
      else{
        this.fail="fail";
      }
    })
  }
}
