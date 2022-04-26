import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  nombre: string = 'jErEmY aNdEs';
  valor: number = 1000;
  obj: object = {
    name: 'Asd',
    lastName: 'Qwe'
  };

  mostrar() {
    console.log( this.nombre );
    console.log( this.valor );
    console.log( this.obj );
  }

}
