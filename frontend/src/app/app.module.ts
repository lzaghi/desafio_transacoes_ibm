import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { TabelaTransacoesComponent } from './transacoes/tabela-transacoes/tabela-transacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    TransacoesComponent,
    LoadingComponent,
    TabelaTransacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
