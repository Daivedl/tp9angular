import { Injectable } from '@angular/core';
import * as data from 'src/assets/datos/instrumentos.json';


@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  instrumentosFile:any = (data  as any).default;

  constructor() { 
    console.log('Servicio funcionando');
    console.log(this.instrumentosFile);
  }

  public getInstrumentos():any[]{
    return this.instrumentosFile.instrumentos;
  }

  public getInstrumentoId(idx: string): any{
    for(let instrumento of this.instrumentosFile.instrumentos){
      if(instrumento.id == idx){
        return instrumento;
      }
    }
  }

  public buscarInstrumento(termino: string): any[]{
    let instrumentosArr:any[] = [];
    termino = termino.toLowerCase();

    for(let instrumentox of this.instrumentosFile.instrumentos){
      let instrumento = instrumentox.instrumentos.toLowerCase();
        if(instrumento.indexOf(termino) >= 0){
          instrumentosArr.push(instrumentox);
        }
    }
    return instrumentosArr;
  }
}
