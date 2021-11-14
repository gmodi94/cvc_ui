import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-display-qr',
  templateUrl: './display-qr.component.html',
  styleUrls: ['./display-qr.component.scss']
})
export class DisplayQrComponent implements OnInit {

  imagePath:any
  base64_string:any 


  constructor(private _sanitizer: DomSanitizer) { }

  


  ngOnInit(): void {
    var userData = localStorage.getItem('userData');
    var parsedData =JSON.parse(userData);

    console.log('retrievedObject: ', JSON.parse(userData));
    this.base64_string = parsedData.qrimage

    this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+this.base64_string)


  }

}
