import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  displayScan:boolean = false 
  buttonLabel = "Open QR Scanner"

  toggleQRCode(){
      this.displayScan = !this.displayScan
      if (this.displayScan){
        this.buttonLabel = "Close QR Scanner"
      }
      else{
        this.buttonLabel= "Open QR Scanner"
      }

  }

  ngOnInit(): void {

    
    // var userData = localStorage.getItem('userData');
    // var parsedData =JSON.parse(userData);

    // console.log('retrievedObject: ', JSON.parse(userData));
    // this.base64_string = parsedData.qrImage



  }

}
