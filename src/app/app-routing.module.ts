import { Routes } from "@angular/router";
import { LayoutAuthComponent } from "./core/components/layout-auth/page/layout-auth.component";



export const APP_ROUTES: Routes = [
  {
    path: "",
    component: LayoutAuthComponent,
    children: [
      {
        path: "pagamentos",
        loadChildren: () =>
        import('./modules/pagamentos/pagamentos.module').then(
            (m) => m.PagamentosModule
        )
      }
    ]
  }
];
