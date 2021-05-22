import {Component, OnInit} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth = false;

  constructor(
    private cookieService: CookieService,
  ) {}

  ngOnInit(): void {
   this.isAuth = !!this.cookieService.get('isAuth');
  }

  auth(): void {
    if (this.isAuth) {
      this.cookieService.delete('isAuth');
    } else {
      this.cookieService.set( 'isAuth', 'true' );
    }
    if (window) {
      window.location.reload();
    }
  }
}
