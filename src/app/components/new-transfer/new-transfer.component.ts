import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss']
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number = 0;
  destiny: string = "";

  transfer() {
    console.log('Initialized a new transfer');
    const valueToEmit = {
      value: this.value,
      destiny: this.destiny
    }
    console.log(valueToEmit)
    this.onTransfer.emit(valueToEmit)
    this.cleanFields()
  }

  cleanFields() {
    this.value = 0;
    this.destiny = '';
  }
}
