import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ListaComponent } from './pages/lista/lista.component';

const routes: Routes = [
   { path: 'cadastro', component: CadastroComponent},
   { path: '', component: ListaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
