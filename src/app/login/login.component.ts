import { Component, Output } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';
import {count} from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
constructor(private regServe:RegisterService){}

Output:any;
countries:any;
states:any;
cities:any;

registerUser:FormGroup=new FormGroup({
  id:new FormControl(''),
  cityId: new FormControl(''),
  countryId:new FormControl(''),
  dob:new FormControl(''),
  email: new FormControl('',[Validators.required]),
  fname: new FormControl('',[Validators.required,Validators.maxLength(6),Validators.minLength(2)]),
  gender:new FormControl(''),
  lname:new FormControl('',[Validators.required,Validators.maxLength(8),Validators.minLength(2)]),
  phno: new FormControl('',[Validators.required]),
  stateId: new FormControl(''),
 
 })



 ngOnInit():void{
  this.getAllCountries();
  

 }
//  OnReset(data:any){
//   data.reset()
// }


// getcountry(){
//    this.reg.getContriData().subscribe((res)=>this.countries=res)
// }

// getState(countryId:number){
//   this.reg.getStateData(countryId).subscribe((res)=>this.states=res)
// }
// getCity(stateId:number){
//   this.reg.getcityData(stateId).subscribe((res)=>this.cities=res)
// }
// getemail(email:any){
//   this.reg.getemailData(email).subscribe((res)=>console.log(res))
// }
// PostAll(){
//   this.reg.postData(this.register.value).subscribe((res)=>console.log(res))
// }


saveUser()
{
  this.regServe.postUser(this.registerUser.value).subscribe((res:any)=>alert(res))
}

getAllCountries()
{
  this.regServe.getCountries().subscribe((res:any)=> this.countries=res)
}
getStates(id:number)
{
  this.regServe.getStates(id).subscribe((res:any)=>this.states=res)
}
getAllCities(id:number): void
{
  this.regServe.getCities(id).subscribe((res:any)=>this.cities=res)
}
checkEmail(email:any)
{
  this.regServe.getEmail(email).subscribe((res:any)=>alert(res))
}
}

