import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  toggleOn = false;
  data={}


  loginForm = new FormGroup({
    mobile_number: new FormControl('', Validators.required),
    otp: new FormControl('', Validators.required),
  });

  validateOTP()
  { 
      if (!this.toggleOn){
        this.data ={}
        this.data['mobile_number'] = this.loginForm.controls['mobile_number'].value

    

        this.http.post<any>("https://conviscard.herokuapp.com/v1/send_otp",this.data ).subscribe(data => {
          console.log(data)
        
      })

    }else{
       this.data = this.loginForm.value
       this.data['action'] =  'log_in'

       this.http.post<any>("https://conviscard.herokuapp.com/v1/validate_otp",this.data ).subscribe(data => {
        console.log(data)

        localStorage.setItem('userData', JSON.stringify(data));

        
        this.route.navigateByUrl('scan');

      
    }, (error) => {                              //Error callback
      console.error('error caught in component', error)


      //throw error;   //You can also throw the error to a global error handler
    })


    }


    this.toggleOn =!this.toggleOn
    console.log(this.loginForm.controls['mobile_number'].value)
    console.log(this.loginForm.value)
  

  
  }

  constructor(private http:HttpClient, private route:Router) {

     }

  ngOnInit(): void {


    



  }

}
