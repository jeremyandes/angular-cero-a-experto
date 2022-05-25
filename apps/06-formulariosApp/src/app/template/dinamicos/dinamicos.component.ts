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
      { id: 3, nombre: 'Rainbow Six Siege' },
      { id: 4, nombre: 'Diep.io' },
    ]
  }
  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  guardar() { }

  agregar() {
    const nuevoFavorito: Favorito = {
      nombre: this.nuevoJuego,
      id: Date.now()
    }
    this.persona.favoritos.push({ ...nuevoFavorito });
    this.nuevoJuego = '';
  }
  eliminar(i: number) {
    this.persona.favoritos.splice(i, 1);
  }

  nombreValid() {
    return this.form?.controls['nombre']?.errors && this.form?.controls['nombre']?.touched
  }

}
