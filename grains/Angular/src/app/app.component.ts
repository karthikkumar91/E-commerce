import { Component } from '@angular/core';
import {HttpSampleService} from './http-sample.service'
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sample : HttpSampleService,
    private router : Router){
    this.sample.default().subscribe((result)=>{
      console.log(result);
      if(result === 'success'){
        this.router.navigate(['register'])
      }
    })
    
  }
  title = 'E-Commerce';
}
