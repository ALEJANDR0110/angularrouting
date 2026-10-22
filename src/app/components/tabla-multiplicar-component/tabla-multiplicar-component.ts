import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
// ESTAS DOS LIBRERIAS SON PARA LOS PARAMETROS
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-component',
  standalone: false,
  styleUrl: './tabla-multiplicar-component.css',
  templateUrl: './tabla-multiplicar-component.html',
})
export class TablaMultiplicarComponent implements OnInit{
    public numero!: number;
    public tablaMult: {operacion: string, resultado: number} [];

  constructor(
    private _activeRoute: ActivatedRoute, 
    private _cdr: ChangeDetectorRef
  ) {
    this.tablaMult = [];
  }

  generarTabla(): void {
    let auxString = ""
    let auxInt = 0;
    let auxLista = [];
      
    for(let i = 1; i <= 10; i++) {
      auxString = this.numero + " * " + i
      auxInt = this.numero * i;
      auxLista.push({
        operacion: auxString,
        resultado: auxInt
      })
    }

    this.tablaMult = auxLista
  }

  ngOnInit(): void {
    //AQUI NOS SUBSCRIBIMOS A LA RECUPERACION DEL PARAMETRO
    this._activeRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE PARAMS ES DONDE RECIBIMOS LOS PARAMETROS POR SU :NAME
      //LA SINTAXIS ES parametros['parametername']
      //EL PARAMETRO ES OPCIONAL, POR LO QUE PREGUNTAMOS
      if(parametros['numero'] != null) {
        this.numero = parseInt(parametros['numero']);
        this.generarTabla();
        this._cdr.detectChanges();
      }
    })
  }
}
