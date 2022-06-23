import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WalletsComponent} from './wallets.component';

describe('HomeComponent', () => {
  let component: WalletsComponent;
  let fixture: ComponentFixture<WalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalletsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
