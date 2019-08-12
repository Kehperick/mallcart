import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListingService {

  constructor() { }

  getProductList(){
    return [
      {id: 1, price: 20000, name: 'samsung s4', seller: 'electronica.Inc', country: 'cameroon', isVerified:'verified'},
      {id: 1, price: 4320000, name: 'Techno spark 2', seller: 'Star electronics.Inc', country: 'Ghana', isVerified:'verified'},
      {id: 1, price: 4320000, name: 'Infinix Hot 7', seller: 'Acortic.com', country: 'Nigeria', isVerified:'not verified'},
      {id: 1, price: 4320000, name: 'Alcatel m12', seller: 'Elongia.ltd', country: 'Togo', isVerified:'verified'},
      {id: 1, price: 4320000, name: 'samsung s9+', seller: 'Samsung', country: 'USA', isVerified:'verified'},
      {id: 1, price: 4320000, name: 'Techno spark 3', seller: 'ElecMachine', country: 'Germany', isVerified:'verified'}
    ];
  }
}
