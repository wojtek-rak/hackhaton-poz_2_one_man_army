import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PackData } from "../classes/pack-data";

@Injectable({
  providedIn: "root"
})
export class MapsDataService {
  private host = "http://localhost/";
  constructor(private _http: HttpClient) {}

  public getLocations() {
    let data: Array<PackData> = [
      {
        Typ: "POCZTA_POLSKA_ZABKA",
        Nazwa: "Sklep Żabka",
        Adres: " Jutrzenka 8 ",
        Kod_pocztowy: "60-373",
        Miasto: " Poznań",
        Dlugosc: "16.877334594726562",
        Szerokosc: "52.41082000732422",
        Godziny_odbioru:
          '[{"day":"SATURDAY","from":"06:00","to":"23:00"},{"day":"WORKING","from":"06:00","to":"23:00"}]',
        Uwagi: ""
      },
      {
        Typ: "PACZKOMAT",
        Nazwa: " Paczkomat POZ01A",
        Adres: " Jutrzenka 8 ",
        Kod_pocztowy: "60-373",
        Miasto: " Poznań",
        Dlugosc: "16.89326",
        Szerokosc: "52.44955",
        Godziny_odbioru:
          '[{"day":"SATURDAY","from":"06:00","to":"23:00"},{"day":"WORKING","from":"06:00","to":"23:00"}]',
        Uwagi: ""
      }
    ];
    // return this._http.get(this.host + "api/");
    return data;
    return this._http.get(
      "http://braincode2019.azurewebsites.net/api/points/points"
    );
  }
}
