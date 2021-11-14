import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private http:HttpClient) { }

  data={}

  registrationForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    mobile_number: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    extra_notes: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
  }

  register()
  { 
    
        this.data =this.registrationForm.value
       

        this.http.post<any>("https://conviscard.herokuapp.com/v1/registration",this.data ).subscribe(data => {
          console.log(data)
          alert("Success")
        
      })

    }
      


    

}
