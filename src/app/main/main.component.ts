import {Component, OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {CookieService} from 'ngx-cookie-service';
import {GetItemsService} from '../core/get-items.service';
import { Support } from '../core/entities/support';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isUser = false;
  supports: Support[];

  constructor(config: NgbCarouselConfig, private cookieService: CookieService, private getItemsService: GetItemsService) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 4000;
  }

  ngOnInit(): void {
    this.isUser = !!this.cookieService.get('isAuth');
    this.getItemsService.getRecommendedGrants('423123432432').subscribe((aa) => {
      console.log(aa);
    });
  }
}
