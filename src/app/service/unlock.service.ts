import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UnlockService {

  constructor(private pra:HttpClient) {}

  
  PostUser(data:any)
  {
    return this.pra.post(`http://15.206.171.20:9090/unlock`,data,{responseType:'text'})
  }
}
