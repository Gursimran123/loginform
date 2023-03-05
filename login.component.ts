import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
login:any=FormGroup;
user:any=[];
constructor(private fb:FormBuilder, private router:Router, private comnserve:CommonService)
{

}
ngOnInit(): void{
 this.login=this.fb.group({
  name:['',Validators.required],
  email:['',Validators.compose([Validators.required,Validators.email])]
 })
 this.comnserve.getUser().subscribe((data:any)=>{
  this.user=data;
 })
}
loginSubmit(data:any){
  if(data.name){
    this.user.forEach((item:any)=>{
      if(item.name===data.name && item.email===data.email){
        localStorage.setItem("isLoggedIn","true");
        this.router.navigate(['home']);
      }
      else{
        localStorage.clear
      }
    })
  }
}
goToSignUp()
{
  this.router.navigate(['signup'])
}
}
