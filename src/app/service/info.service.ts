import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class InfoService {
baseurl="http://15.206.171.20:9090/"
  
  constructor(private engineer:HttpClient) { }
  
  postData(body:any){
    return this.engineer.post(`${this.baseurl}login`,body,{responseType:'text'})
    
  }

}
