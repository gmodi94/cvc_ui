import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScannerComponent } from './scanner/scanner.component';

const routes: Routes = [{ path:  '', component:  LoginComponent},
                        {path:'scan', component:ScannerComponent},
                        { path:  'register', component:  RegistrationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
