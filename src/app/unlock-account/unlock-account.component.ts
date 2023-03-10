import { Component } from '@angular/core';
import { UnlockService } from '../service/unlock.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {

  unlock=new FormGroup({
    tempPwd:new FormControl(''),
    confirmPwd: new FormControl(''),
  email: new FormControl('',[Validators.required]),
   newPwd:new FormControl('') ,
  
   })

constructor(private hi:UnlockService){}
output:any;


 SaweUser()
{
  this.hi.PostUser(this.unlock.value).subscribe((res:any)=>alert(res))
}
}
