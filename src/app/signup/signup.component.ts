import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 import { InfoService } from '../service/info.service';
 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  constructor(private bhi:InfoService){}
  registration=new FormGroup({
    email:new FormControl("",[Validators.required]),
    pwd:new FormControl("")
    
   });

  
      
      PostAll(){
        this.bhi.postData(this.registration.value).subscribe((res)=>alert(res))
      }
}
