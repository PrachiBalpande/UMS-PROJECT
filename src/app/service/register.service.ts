import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  baseUrl=`http://15.206.171.20:9090/`
  

//   data:any


//   getContriData(){
//     return this.prachi.get(`http://15.206.171.20:9090/countries`)
//   }
  

//   getStateData(countryId:number){
//     return this.prachi.get('http://15.206.171.20:9090/states/${countryId}')
//   }
//   getcityData(stateId:number){
//     return this.prachi.get(`http://15.206.171.20:9090/cities/${stateId}`)
//   }
//   getemailData(id:number){
//     return this.prachi.get(`http://15.206.171.20:9090/emailcheck`)
//   }



//   postData(body:any){
//     return this.prachi.post(`http://15.206.171.20:9090/login`,body,{responseType:'text'})
    
//   }



LoginUser(data:any)
  {
    return this.http.post(`${this.baseUrl}login`,data,{responseType:'text'})
  }
  postUser(data:any)
  {
    return this.http.post(`${this.baseUrl}saveUser`,data,{responseType:'text'})
  }
  getCountries()
  {
    return this.http.get(`${this.baseUrl}countries`)
  }
  getStates(countryId:number)
  {
    return this.http.get(`${this.baseUrl}states/${countryId}`)
  }
  getCities(stateId:number)
  {
    return this.http.get(`${this.baseUrl}cities/${stateId}`)
  }
  getEmail(email:any)
  {
    return this.http.get(`${this.baseUrl}emailcheck/${email}`,{responseType:'text'})
  }
}