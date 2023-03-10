import { Component } from '@angular/core';
import { ForgetService } from '../service/forget.service';
import { FormGroup,FormControl } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';
// import { __param } from 'tslib';

@Component({
  selector: 'app-forgetpassw',
  templateUrl: './forgetpassw.component.html',
  styleUrls: ['./forgetpassw.component.css']
})
export class ForgetpasswComponent {

  Fuser=new FormGroup({
    emailId: new FormControl('')
    })
  

  constructor(private sne:ForgetService){}
  
  
emailId:any;
FsaveUser()
{
  this.sne.FgetData(this.Fuser.value.emailId).subscribe((res:any)=>alert(res))
}
  

}