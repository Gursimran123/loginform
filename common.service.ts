import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  baseURL="http://localhost:3000/user"
  constructor(private http:HttpClient) { }

  getUser(){
    return this.http.get(this.baseURL);
  }
  addUser(data:any){
    return this.http.post(this.baseURL,data);
  }
}
