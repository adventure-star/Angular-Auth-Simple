import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObserveComponent } from './observe/observe.component';
import { CreateComponent } from './components/create/create.component';
import { Font14Directive } from './directives/font14.directive';
import { ChildComponent } from './components/child/child.component';
import { DigitcountPipe } from './pipes/digitcount.pipe';
import { CustomdatePipe } from './pipes/customdate.pipe';
import { HttpComponent } from './components/http/http.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { ImageComponent } from './components/image/image.component';
import { LogoutComponent } from './components/logout/logout.component';
import { PrimeComponent } from './components/prime/prime.component';


@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    RegisterComponent,
    LoginComponent,
    ObserveComponent,
    CreateComponent,
    Font14Directive,
    ChildComponent,
    DigitcountPipe,
    CustomdatePipe,
    HttpComponent,
    ListComponent,
    EditComponent,
    ImageComponent,
    LogoutComponent,
    PrimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
