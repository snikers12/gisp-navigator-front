import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './shared/card/card.component';
import { FormComponent } from './form/form.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { GrantsComponent } from './grants/grants.component';
import { GrantComponent } from './grant/grant.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { TrustHtmlPipe } from './core/pipes/trust-html.pipe';
import { GetItemsService } from './core/get-items.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CardComponent,
    FormComponent,
    GrantsComponent,
    GrantComponent,
    TrustHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    GetItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
