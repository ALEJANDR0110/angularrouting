import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// ESTAS DOS LIBRERIAS SON PARA LOS PARAMETROS
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit{
  public doble!: number;
  public numero!: number;

  //RECIBIMOS EL OBJETO INYECTADO DE LA RUTA
  constructor(
    private _activeRoute: ActivatedRoute, 
    private _router: Router,
    private _cdr: ChangeDetectorRef
  ) {
    this.doble = 0;
  }

  redirect(num: number): void {
    this._router.navigate(["/doble", num])
  }

  goToHome(): void {
    this._router.navigate(["/"])
  }

  ngOnInit(): void {
    //AQUI NOS SUBSCRIBIMOS A LA RECUPERACION DEL PARAMETRO
    this._activeRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE PARAMS ES DONDE RECIBIMOS LOS PARAMETROS POR SU :NAME
      //LA SINTAXIS ES parametros['parametername']
      //EL PARAMETRO ES OPCIONAL, POR LO QUE PREGUNTAMOS
      if(parametros['numero'] != null) {
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
        this._cdr.detectChanges();
      }
    })
  }
}
