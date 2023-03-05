import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private comnserve:CommonService, private router:Router){}
logOut(){
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
