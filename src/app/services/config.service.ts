import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private conf = {
    "API_URL": "http://35.180.126.94:5000",
  };

  constructor() { }

  public getKey(key: string) {
    return this.conf[key];
  }
}
