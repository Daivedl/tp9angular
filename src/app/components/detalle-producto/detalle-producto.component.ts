import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliveryService } from 'src/app/servicios/delivery.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html'
})
export class DetalleProductoComponent implements OnInit {

  instrumento: any;

  constructor(private activatedRoute:ActivatedRoute, private servicioDelibery:DeliveryService) { 
    this.activatedRoute.params.subscribe(params =>{
      this.instrumento = this.servicioDelibery.getInstrumentoId(params['id']);
    });
  }


  ngOnInit(): void {
  }

}
