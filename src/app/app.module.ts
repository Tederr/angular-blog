import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarraComponent } from './componentes/menu-barra/menu-barra.component';
import { MenuTituloComponent } from './componentes/menu-titulo/menu-titulo.component';
import { CardCentralComponent } from './componentes/card-central/card-central.component';
import { CardTipicosComponent } from './componentes/card-tipicos/card-tipicos.component';
import { HomeComponent } from './paginas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarraComponent,
    MenuTituloComponent,
    CardCentralComponent,
    CardTipicosComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
