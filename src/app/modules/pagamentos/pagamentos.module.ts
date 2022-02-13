import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagamentosComponent } from './page/pagamentos/pagamentos.component';
import { PAGAMENTOS_ROUTES } from './pagamentos-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from 'src/app/shared/shared.module';
import { CadastroComponent } from './components/cadastro/cadastro.component';


@NgModule({
  declarations: [PagamentosComponent, CadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PAGAMENTOS_ROUTES),
    HttpClientModule,
    NgxPaginationModule,
    SharedModule
  ],
  exports: [NgxPaginationModule]
})
export class PagamentosModule { }
