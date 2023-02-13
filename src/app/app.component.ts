import { Component } from '@angular/core';
import { TransferService } from './services/transfer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transfers: any[] = [];

  constructor(private service: TransferService) {}

  // trans($event: any) {
  //   console.log('hey');
  //   console.log($event);
  //   this.service.add($event).subscribe((a) => console.log(a));
  // }
}
