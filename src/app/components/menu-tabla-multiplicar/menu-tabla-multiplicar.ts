import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tabla-multiplicar',
  standalone: false,
  styleUrl: './menu-tabla-multiplicar.css',
  templateUrl: './menu-tabla-multiplicar.html',
})
export class MenuTablaMultiplicar{
  public listaNums!: Array<number>;

  constructor() {
    this.listaNums = []
    for(let i = 0; i < 5; i++) {
      let numAleat = Math.floor(Math.random() * 200) + 1;
      this.listaNums.push(numAleat)
    }
  }

}
