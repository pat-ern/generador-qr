import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent{

  title = 'generador-qr';

  cardTitle = 'Crea el código QR para tu clase';

  size = 300;

  qrInfo: any;

  selected: any;

  clases = [
    {
      id: 1,
      nombre: 'arquitectura de software',
      codigo: 'asy4131',
      seccion: '009d',
    },
    {
      id: 2,
      nombre: 'calidad de software',
      codigo: 'csy4111',
      seccion: '007d',
    },
    {
      id: 3,
      nombre: 'estadistica descriptiva',
      codigo: 'mat4140',
      seccion: '004d',
    },
    {
      id: 4,
      nombre: 'etica para el trabajo',
      codigo: 'eay4470',
      seccion: '004d',
    },
    {
      id: 5,
      nombre: 'ingles intermedio',
      codigo: 'ini5111',
      seccion: '018d',
    },
    {
      id: 6,
      nombre: 'programacion de aplicaciones moviles',
      codigo: 'pgy4121',
      seccion: '008d',
    },

  ];

  constructor() { }

  generarQR() {
    if (this.selected == undefined) {
      alert('Debes seleccionar una asignatura');
    } else {
      this.qrInfo = 'reg_app_cod*'+this.selected.codigo+'*'+this.selected.seccion;
    }
  }

  limpiarQR() {
    this.qrInfo = undefined;
    this.selected = undefined;
  }

}



