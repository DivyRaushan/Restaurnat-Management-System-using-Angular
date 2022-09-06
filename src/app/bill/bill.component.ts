import { Component, OnInit } from '@angular/core';
import { PriceService } from '../services/price.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  discount=5;


  constructor(public data:PriceService) { }

  ngOnInit(): void {
  }

  

  
  
  
  
  
  
  

 
  

}
