import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router:Router,private comnserve:CommonService){}
  gotoHome(){
    this.router.navigate(['home1']);
  }
  gotoNews(){
    this.router.navigate(['news']);
  }
  gotoAbout(){
    this.router.navigate(['about']);
  }
  gotoContact(){
    this.router.navigate(['contact']);
  }
}
