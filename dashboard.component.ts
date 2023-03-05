import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList:any=[]
  constructor(private comnserve:CommonService, private router:Router){}

  ngOnInit(): void {
   this.comnserve.getUser().subscribe((data:any)=>{
    this.userList=data;
   })
  }
  logOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
