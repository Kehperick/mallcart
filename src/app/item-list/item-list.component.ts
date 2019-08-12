import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ProductListingService } from '../services/product-listing.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  value: number = 100;
  toggleValue: string;
  options: Options = {
    floor: 0,
    ceil: 200,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '' + value;
        case LabelType.High:
          return '' + value;
        default:
          return '$' + value;
      }
    }
  };

  productList: any[];

  constructor( private _productService: ProductListingService) {
   }

  ngOnInit() {
    this.productList = this._productService.getProductList();
  }
  getToggleElement( value){
    this.toggleValue=value;
  }

}
