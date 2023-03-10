import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  constructor(private http:HttpClient) { }
 

  FgetData(emailId:any){
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${emailId}`,{responseType:'text'})
  
  }

}
