import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // Api
  private conf = {
    "API_URL": "http://35.180.27.64:5000",
  };

  constructor() { }

  public getKey(key: string) {
    return this.conf[key];
  }
}
