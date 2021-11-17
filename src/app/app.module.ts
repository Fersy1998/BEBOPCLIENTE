import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LandingPageNavbarComponent } from './components/landing-page-navbar/landing-page-navbar.component';
import { LandingPageFooterComponent } from './components/landing-page-footer/landing-page-footer.component';
import { FormularioLoginComponent } from './components/formulario-login/formulario-login.component';
import { InicioClientComponent } from './components/inicio-client/inicio-client.component';
import { EdicionPerfilComponent } from './components/edicion-perfil/edicion-perfil.component';
import { VerPerfilComponent } from './components/ver-perfil/ver-perfil.component';
import { MetodosPagoComponent } from './components/metodos-pago/metodos-pago.component';
import { FormularioLoginMotoristaComponent } from './components/formulario-login-motorista/formulario-login-motorista.component';
import { FormularioRegistroClienteComponent } from './components/formulario-registro-cliente/formulario-registro-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarClientComponent } from './components/navbar-client/navbar-client.component';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { FavoritosComponent } from './components/favoritos/favoritos.component';
import { PedidosClienteComponent } from './components/pedidos-cliente/pedidos-cliente.component';
import { FormularioMetodoPagoComponent } from './components/formulario-metodo-pago/formulario-metodo-pago.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LandingPageNavbarComponent,
    LandingPageFooterComponent,
    FormularioLoginComponent,
    InicioClientComponent,
    EdicionPerfilComponent,
    VerPerfilComponent,
    MetodosPagoComponent,
    FormularioLoginMotoristaComponent,
    FormularioRegistroClienteComponent,
    NavbarClientComponent,
    MenuLateralComponent,
    FavoritosComponent,
    PedidosClienteComponent,
    FormularioMetodoPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
