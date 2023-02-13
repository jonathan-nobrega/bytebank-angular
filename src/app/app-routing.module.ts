import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTransferComponent } from './components/new-transfer/new-transfer.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  { path: '', redirectTo: 'transactions', pathMatch: 'full' },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'new-transfer', component: NewTransferComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
