import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponents } from './components/cine-components/cine-components';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { appRoutinProvider, routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarComponent } from './components/tabla-multiplicar-component/tabla-multiplicar-component';
import { MenuTablaMultiplicar } from './components/menu-tabla-multiplicar/menu-tabla-multiplicar';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponents,
    NotFoundComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablaMultiplicarComponent,
    MenuTablaMultiplicar,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutinProvider],
  bootstrap: [App],
})
export class AppModule {}
