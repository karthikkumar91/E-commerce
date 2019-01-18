import { Component, OnInit } from '@angular/core';
import {HttpSampleService} from '../http-sample.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sample : HttpSampleService,
    private router : Router) { }
 

  ngOnInit() {
  }
  register(value){
    console.log(value);
    this.sample.register(value).subscribe((result)=>{
      console.log('Register Result:-->'+result);
      if(result ==="Updated"){
        this.router.navigate(['customer-page'])
      }
    })
  }
  
}
