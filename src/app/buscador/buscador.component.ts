import { Component, OnInit } from '@angular/core';
import { Product } from '../Producto'
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {
  // productos: Product[];
  
  productos: Product[] = [new Product(12,"Smartphone","LG","Quadcore 3GHZ", 12018.5,5),
  new Product(123,"Smartwatch", "Sony", "3GB Ram", 4999.9,0 ),
  new Product(34,"SmartTV", "Sony", "52 pulgadas, Conexión wifi", 8999.9,3 )]
  res: Product[] = this.productos;

  exists: boolean = false;
  mayor3: boolean = false;
  ordered: boolean = false;

  search: string = "";
  constructor() { }
  E: string = "";
  ngOnInit(): void {
  }
  
  buscar(): void {
    this.res = this.productos.filter(e => e.nombre.toUpperCase().includes(this.search.toUpperCase()) || e.descripcion.includes(this.search.toUpperCase()))
    if(this.ordered){
      this.res.sort((a,b) => a.precio - b.precio);
    }
  }
  order(): void{
    if(this.ordered){
      this.res.sort((a,b) => a.precio - b.precio);
    }else{
      this.buscar();
    }
  }
  test(): void{
    this.E = `${this.exists}, ${this.ordered}, ${this.mayor3}`
    console.log(this.E)
  }
}
