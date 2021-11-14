import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayQrComponent } from './display-qr/display-qr.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [{ path:  '', component:  LoginComponent},
                        
                        {
                          path: 'display', component:DisplayQrComponent,
                        },
                        {
                          path: 'scan', component:DashboardComponent
                        },
                      
                  
                        { path:  'register', component:  RegistrationComponent},
                        
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
