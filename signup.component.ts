import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signup: any= FormGroup;
id:any=4;
  constructor(private fb:FormBuilder, private router:Router, private comnserve:CommonService) {

  }
  ngOnInit(): void {
   this.signup=this.fb.group({
    name:['',Validators.required],
    email:['',Validators.compose([Validators.required,Validators.email])]
   })
  }

  signupSubmit(data:any){
   console.log(data)
   let dataToPass={
    name:data.name,
    email:data.email,
    id:this.id++
   }
   this.comnserve.addUser(dataToPass).subscribe((data:any)=>{
    console.log(data);
   })
  }
  goToLogin(){
    this.router.navigate(['login']);
  }
}
