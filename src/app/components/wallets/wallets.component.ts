import {Component} from '@angular/core';
import {Platform} from "@angular/cdk/platform";

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent {
  isMobile = false;

  constructor(public platform: Platform) {
    this.isMobile = platform.ANDROID || platform.IOS
  }
}
