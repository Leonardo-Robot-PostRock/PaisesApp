import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: []
})
export class VerPaisComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ countryId }) => {
      console.log(countryId);
      this.paisService.getPaisPorAlphaCode(countryId).subscribe(pais => {
        console.log(pais);
        
      })
    });
  }
}
