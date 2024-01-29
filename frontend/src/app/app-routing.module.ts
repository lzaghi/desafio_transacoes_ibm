import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { FormTransacoesComponent } from './transacoes/form-transacoes/form-transacoes.component';

const routes: Routes = [
  { path: '', component: TransacoesComponent },
  { path: 'adicionar', component: FormTransacoesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
