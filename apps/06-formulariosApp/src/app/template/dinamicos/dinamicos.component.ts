import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  persona: Persona = {
    nombre: 'Jeremy',
    favoritos: [
      { id: 1, nombre: 'CSGO' },
      { id: 2, nombre: 'Valorant' },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() { }

  nombreValid() {
    return this.form?.controls['nombre']?.errors && this.form?.controls['nombre']?.touched
  }

}
