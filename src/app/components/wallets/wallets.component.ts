import {Component, OnInit} from '@angular/core';
import {WalletsService} from "./wallets.service";
import {Wallet} from "../../interfaces/wallet";


@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.scss']
})
export class WalletsComponent implements OnInit {
  userWalletsSubscription;
  userWallets: Wallet[] = [];
  userWalletAddressWithVisiblePk: string | undefined;

  constructor(private walletsService: WalletsService) {
    this.userWalletsSubscription = walletsService.fetchAll().subscribe(res => this.userWallets = res)
  }

  ngOnInit(): void {
  }

  isPkVisibleForWallet(walletAddress: string) {
    return this.userWalletAddressWithVisiblePk === walletAddress
  }

  changePrivateKeyVisibility(walletAddress: string) {
    this.userWalletAddressWithVisiblePk === walletAddress ?
      this.userWalletAddressWithVisiblePk = undefined :
      this.userWalletAddressWithVisiblePk = walletAddress
  }

  isEthereumWallet(address: string) {
    return address.startsWith('0x')
  }

  ngOnDestroy() {
    this.userWalletsSubscription.unsubscribe()
  }

  async copyToClipboard(text: string) {
    await navigator.clipboard.writeText(text)
  }
}
