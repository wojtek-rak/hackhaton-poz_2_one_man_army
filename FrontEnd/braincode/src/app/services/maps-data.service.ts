import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PackData } from "../classes/pack-data";

@Injectable({
  providedIn: "root"
})
export class MapsDataService {
  private host = "http://localhost/";
  constructor(private _http: HttpClient) {}

  public getLocations(latitude, longitude) {
    return this._http.get(
      `http://braincode2019.azurewebsites.net/api/points/pointsFilter/${longitude},${latitude}`
    );
  }
}
