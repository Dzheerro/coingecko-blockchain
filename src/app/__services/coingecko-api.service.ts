import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoApiService {

  constructor(private http: HttpClient) { }

  getCoinGeckoCoins() {
    return this.http.get('https://api.coingecko.com/api/v3/coins/list')
  };

}
