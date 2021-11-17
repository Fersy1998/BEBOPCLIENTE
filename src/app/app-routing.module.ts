import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { FormularioLoginMotoristaComponent } from './components/formulario-login-motorista/formulario-login-motorista.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { FormularioRegistroClienteComponent } from './components/formulario-registro-cliente/formulario-registro-cliente.component';
import { InicioClientComponent } from './components/inicio-client/inicio-client.component';
import { EdicionPerfilComponent } from './components/edicion-perfil/edicion-perfil.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PedidosClienteComponent } from './components/pedidos-cliente/pedidos-cliente.component';
import { MetodosPagoComponent } from './components/metodos-pago/metodos-pago.component';
import { FormularioMetodoPagoComponent } from './components/formulario-metodo-pago/formulario-metodo-pago.component';


const routes: Routes = [
  { path: '', redirectTo:'user/landing-page', pathMatch:'full'},
  { path: 'user/landing-page', component:LandingPageComponent},
  { path: 'user/login-client', component: FormularioLoginComponent},
  { path: 'user/login-motorista', component: FormularioLoginMotoristaComponent},
  { path: 'user/registro-cliente', component: FormularioRegistroClienteComponent},
  { path: 'user/inicio', component: InicioClientComponent},
  { path: 'user/favoritos', component: FavoritosComponent},
  { path: 'user/editar-perfil', component: EdicionPerfilComponent},
  { path: 'user/pedidos', component: PedidosClienteComponent},
  { path: 'user/metodos-de-pago', component: MetodosPagoComponent},
  { path: 'user/agregar-metodo-de-pago', component: FormularioMetodoPagoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
