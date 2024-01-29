import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TransacoesComponent } from './transacoes/transacoes.component';
import { LoadingComponent } from './loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { TabelaTransacoesComponent } from './transacoes/tabela-transacoes/tabela-transacoes.component';
import { FormTransacoesComponent } from './transacoes/form-transacoes/form-transacoes.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TransacoesComponent,
    LoadingComponent,
    TabelaTransacoesComponent,
    FormTransacoesComponent,
    HeaderComponent
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
