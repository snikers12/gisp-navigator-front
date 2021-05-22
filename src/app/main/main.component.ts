import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isUser = false;

  constructor(config: NgbCarouselConfig, private cookieService: CookieService) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 4000;
  }

  ngOnInit(): void {
    this.isUser = !!this.cookieService.get('isAuth');
  }
}
