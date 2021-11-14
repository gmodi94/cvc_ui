import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  scanResult: any
  apiResponse: string='';
  scannerEnabled: boolean = true;

      // var userData = localStorage.getItem('userData');
    // var parsedData =JSON.parse(userData);

    // console.log('retrievedObject: ', JSON.parse(userData));
    // this.base64_string = parsedData.qrImage

    userData:string = localStorage.getItem('userData')
    parsedData =JSON.parse(this.userData);
    personName:string =""



    onCodeResult(result:string)
  { 


    this.scannerEnabled = false;
     this.scanResult=JSON.parse(result);
    
     const headers = { 'Authorization': this.parsedData.token };
     const body =  { id: this.scanResult.id }

     const url = 'https://conviscard.herokuapp.com/v1/scan'
     this.personName = this.scanResult.Name
     console.log(body)


     this.http.post<any>(url,body, {headers}).subscribe(data => {
      this.apiResponse="Result :" + data.status
  })
  }

  public enableScanner() {
    this.scannerEnabled = !this.scannerEnabled;
  }

  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


}
