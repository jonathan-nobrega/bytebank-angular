import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer.model';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  private transfersList: any[];
  private url = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.transfersList = [];
  }

  get transfers() {
    return this.transfersList;
  }

  add(transfer: Transfer) {
    this.hydrate(transfer);
    return this.httpClient.post<Transfer>(this.url, transfer)
  }

  getAll() {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  private hydrate(transfer: Transfer) {
    transfer.date = new Date();
  }
}
