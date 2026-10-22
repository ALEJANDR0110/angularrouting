import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./components/home-component/home-component";
import { CineComponents } from "./components/cine-components/cine-components";
import { MusicaComponent } from "./components/musica-component/musica-component";
import { NotFoundComponent } from "./components/not-found-component/not-found-component";
import { NumeroDobleComponent } from "./components/numero-doble-component/numero-doble-component";
import { TablaMultiplicarComponent } from "./components/tabla-multiplicar-component/tabla-multiplicar-component";
import { MenuTablaMultiplicar } from "./components/menu-tabla-multiplicar/menu-tabla-multiplicar";

//NECESITAMOS UN ARRAY CON LAS RUTAS.
//DICHO ARRAY DEBE SER DE KLA CLASE Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "cine", component: CineComponents},
    { path: "musica", component: MusicaComponent},
    { path: "doble", component: NumeroDobleComponent },
    { path: "menuTabla", component: MenuTablaMultiplicar },
    { path: "tablaMultiplicar/:numero", component: TablaMultiplicarComponent },
    { path: "doble/:numero", component: NumeroDobleComponent },
    { path:"**", component: NotFoundComponent }
]

//PARA EL MODULO DEBEMOS EXPORTAR DOS VARIABLES
export const appRoutinProvider: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);