import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponents } from './components/cine-components/cine-components';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { appRoutinProvider, routing } from './app.routing';

@NgModule({
  declarations: [
    App,
    HomeComponent, 
    MusicaComponent,
    CineComponents,
    NotFoundComponent
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutinProvider],
  bootstrap: [App],
})
export class AppModule {}
