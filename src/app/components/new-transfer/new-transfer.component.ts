import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number = 0;
  destiny: string = "";

  constructor(private service: TransferService, private router: Router) { }

  transfer() {
    console.log('Initialized a new transfer');
    const valueToEmit = { value: this.value, destiny: this.destiny };

    this.service.add(valueToEmit).subscribe((result: any) => {
      this.cleanFields();
      this.router.navigateByUrl('transactions')
    },
      (error: any) => console.error(error))
  }

  cleanFields() {
    this.value = 0;
    this.destiny = '';
  }
}
