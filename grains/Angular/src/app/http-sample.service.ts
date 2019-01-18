import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { HttpEventType } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpSampleService {

  constructor(private http :HttpClient) { }
  login(value){
    return this.http.post('http://localhost:5000/admin/login',value);
  }
  register(value){
    return this.http.post('http://localhost:5000/customer/register',value);
  }
  default(){
    return this.http.get('http://localhost:5000/default');
  }
  user_login(value){
    return this.http.post('http://localhost:5000/customer/login',value,{
      withCredentials: true});
  }
  one(result){
    console.log(result)
    return this.http.post('http://localhost:5000/api/check',result,{
      reportProgress :true,
      observe :'events'
    });
  }
}
