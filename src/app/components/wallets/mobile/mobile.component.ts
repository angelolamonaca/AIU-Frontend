import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

  visiblePrivateKey = false;

  constructor() { }

  ngOnInit(): void {
  }

  changePrivateKeyVisibility() {
    this.visiblePrivateKey = !this.visiblePrivateKey
  }

}
