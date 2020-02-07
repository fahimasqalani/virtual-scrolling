import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Project!';
  todaydate;
  public albumdetails = [];
  public personaldetails = []

  constructor(private myService: MyserviceService){}

  ngOnInit(){
      this.todaydate = this.myService.showTodayDate();
     console.log(this.todaydate);
  
  this.myService.getData().subscribe((data) => {
    this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
    console.log(this.albumdetails);
    // this.personaldetails = Array.from(Object.keys(data), k=>data[k]);
    // console.log(this.personaldetails);
 });
 this.myService.getData2().subscribe((data) => {
    this.personaldetails = Array.from(Object.keys(data), k=>data[k]);
    console.log(this.personaldetails);
 });
 }
 onDrop(event: CdkDragDrop<string[]>) {
  if (event.previousContainer === event.container) {
     moveItemInArray(event.container.data, 
        event.previousIndex, event.currentIndex);
  } else {
     transferArrayItem(event.previousContainer.data,
     event.container.data,
     event.previousIndex,
     event.currentIndex);
  }
}
}
