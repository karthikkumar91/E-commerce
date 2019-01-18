import { Component  } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpSampleService} from '../http-sample.service'
import { HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  constructor(private cookieservice : CookieService,
    private sample : HttpSampleService) { }
    url:any;
  selectedFile: File = null;
  fd = new FormData();
   payload = new FormData();

   createFormData(event) {
    this.selectedFile = <File>event.target.files[0]; 
    console.log(event);

    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  product(value){
    console.log(value)
    this.payload.append('photo', this.selectedFile, this.selectedFile.name);
      this.payload.append('name',value.name);
      this.payload.append('price',value.price);
      this.payload.append('desc',value.desc);
      this.payload.append('spcn',value.spcn);
      
      console.log("result:--->"+this.payload);
    this.sample.one(this.payload).subscribe((event)=>
    {
      if(event.type == HttpEventType.UploadProgress){
        console.log('upload Process:----->'+Math.round(event.loaded / event.total * 100)  +'%');
      }
      else if(event.type == HttpEventType.Response){
        console.log(event); 
      }
     
    })
  }
}
