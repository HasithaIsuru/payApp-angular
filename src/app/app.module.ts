import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { FlashMessagesModule } from 'angular2-flash-messages';

// firebase
import {AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule } from 'angularfire2/database';

// services
import { AuthenticationService } from './services/authentication.service';
import { ValidateService } from './services/validate.service';

// components
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ElecBillOfficerComponent } from './elec-bill-officer/elec-bill-officer.component';
import { WaterBillOfficerComponent } from './water-bill-officer/water-bill-officer.component';
import { PoliceOfficerComponent } from './police-officer/police-officer.component';
import { TaxOfficerComponent } from './tax-officer/tax-officer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ElecBillOfficerComponent,
    WaterBillOfficerComponent,
    PoliceOfficerComponent,
    TaxOfficerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [AuthenticationService, ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
