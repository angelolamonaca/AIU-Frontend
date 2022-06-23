import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CreateWalletService} from "./create-wallet.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-create-wallet',
  templateUrl: './create-wallet.component.html',
  styleUrls: ['./create-wallet.component.scss']
})
export class CreateWalletComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    blockchain: new FormControl('bitcoin', [Validators.required])
  })

  constructor(private createWalletService: CreateWalletService) {
  }


  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get blockchain(): FormControl {
    return this.form.get('blockchain') as FormControl;
  }

  createWallet() {
    if (this.form.valid) {
      this.createWalletService.create(this.name.value, this.blockchain.value).pipe(
        tap(() => window.location.reload())
      ).subscribe()
    }
  }
}
