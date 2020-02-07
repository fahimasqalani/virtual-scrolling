import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private finaldata = [];
  private apiurl = "https://jsonplaceholder.typicode.com/photos";
  private apiurl2 = "http://jsonplaceholder.typicode.com/users";
 
  constructor(private http: HttpClient) {} 
    showTodayDate() { 
       let ndate = new Date(); 
       return ndate; 
    }  
    getData() {
      return this.http.get(this.apiurl);
  }
  getData2() {
    return this.http.get(this.apiurl2);
}
}
