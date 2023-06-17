import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Uso de un componente standalone como página
  {
    path: "alone",
    loadComponent: () => import("./standalone-page/standalone-page.component").then(m => m.StandalonePageComponent)
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
