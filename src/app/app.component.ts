import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Capitán América';
  nombre2 = 'RaMiRo SáNcHeZ';

  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;
  porcentaje = 0.123;
  salario = 1234.5;

  fecha: Date = new Date();
  activar = true;

  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/sD9_l3oDOag';
  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20,
    },
  };
}
