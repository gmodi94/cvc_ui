import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  scanResult: string='';
  apiResponse: string='';



  onCodeResult(result:string)
  {
     this.scanResult=result;
     const headers = { 'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMyJ9.-456i7F6ZX9H-qeDw5eOPkNT4Opp4ofTD9hij0tvKp4' };
     const body =  { id: this.scanResult }
     const url = 'https://conviscard.herokuapp.com/v1/scan'
     this.apiResponse = "Scan successful "+ result

     this.http.post<any>(url,body, {headers}).subscribe(data => {
      this.apiResponse="Result for scan id "+this.scanResult +"is" + data.status
  })
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
