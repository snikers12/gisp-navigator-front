import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  currentStage = 1;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  changeStage(): void {
    if (this.currentStage === 4) {
      this.router.navigate(['/grants']).then();
    } else {
      this.currentStage++;
      window.scrollTo(0, 120);
    }
  }
}
