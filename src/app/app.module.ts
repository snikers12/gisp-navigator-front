import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './shared/card/card.component';
import { FormComponent } from './form/form.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { GrantsComponent } from './grants/grants.component';
import { GrantComponent } from './grant/grant.component';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardComponent,
    FormComponent,
    GrantsComponent,
    GrantComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        NgSelectModule
    ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
