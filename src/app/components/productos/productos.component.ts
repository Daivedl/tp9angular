import { Component, OnInit } from '@angular/core';
import { DeliveryService } from 'src/app/servicios/delivery.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  instrumentosArr: any[] = [];

  constructor(private servicioDelivery:DeliveryService, private router:Router) { }

  ngOnInit(): void {
    this.instrumentosArr = this.servicioDelivery.getInstrumentos();
  }

  public verInstrumento(idx: string){
    this.router.navigate(['/detalle', idx]);
  }
}
