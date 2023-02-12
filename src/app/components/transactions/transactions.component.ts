import { Component, Input } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  @Input() transfers: any[] = [];

  constructor(private service: TransferService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((x: any) => (this.transfers = x))
  }

}
