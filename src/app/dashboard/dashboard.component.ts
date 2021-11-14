import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  base64_string:any 

  ngOnInit(): void {
    // var userData = localStorage.getItem('userData');
    // var parsedData =JSON.parse(userData);

    // console.log('retrievedObject: ', JSON.parse(userData));
    // this.base64_string = parsedData.qrImage



  }

}
