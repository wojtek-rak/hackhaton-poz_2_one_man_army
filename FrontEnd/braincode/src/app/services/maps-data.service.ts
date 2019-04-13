import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PackData } from "../classes/pack-data";

@Injectable({
  providedIn: "root"
})
export class MapsDataService {
  private host = "http://localhost/";
  constructor(private _http: HttpClient) {}

  public getDestination(from, to) {
    return this._http.get(
      `http://braincode2019.azurewebsites.net/api/tomtom/${from}/${to}`
    );
  }

  public getLatLng(coords) {
    return this._http.get(
      `http://braincode2019.azurewebsites.net/api/tomtom/GetCoordinates/${coords}`
    );
  }

  public getLocations(latitude, longitude) {
    return this._http.get(
      `http://braincode2019.azurewebsites.net/api/points/pointsFilter/${longitude},${latitude}`
    );
  }

  public deliveryType(cost, type, latLng) {
    return this._http.get(
      `http://braincode2019.azurewebsites.net/api/preference/${cost}/${type}/${latLng}`
    );
  }

  public getWeather(coords) {
    console.log(coords);
    return this._http.get(
      `http://braincode2019.azurewebsites.net/api/weather/${coords}`
    );
  }
}
