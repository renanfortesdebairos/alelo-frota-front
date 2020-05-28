import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:9090/api";
  constructor(private httpClient: HttpClient) {}

  public getCountVehicles() {
    return this.httpClient.get(this.SERVER_URL + "/vehicles/count");
  }

  public getVehiclesByPage(pagina){  
		return this.httpClient.get(this.SERVER_URL + "/vehicles/page/" + pagina);
  }
  
  public getByPlate(plate) {
    return this.httpClient.get(this.SERVER_URL + "/vehicles/" + plate);  
  }

  public deleteById(id) {
    return this.httpClient.delete(this.SERVER_URL + "/vehicles/" + id);
  }
}
