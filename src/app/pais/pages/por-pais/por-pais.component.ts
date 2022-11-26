import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: []
})
export class PorPaisComponent implements OnInit {
  constructor(private paisService: PaisService) {}
  termino: string = '';
  hayError: boolean = false;

  ngOnInit(): void {}
  buscar() {
    this.hayError = false;
    this.paisService.buscarPais(this.termino).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
