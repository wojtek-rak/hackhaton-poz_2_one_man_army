import { Component, OnInit } from "@angular/core";
import { MapsDataService } from "../services/maps-data.service";
import { PackData } from "../classes/pack-data";
import { longStackSupport } from "q";
import { last } from "@angular/router/src/utils/collection";

@Component({
  selector: "app-packes",
  templateUrl: "./packes.component.html",
  styleUrls: ["./packes.component.css"]
})
export class PackesComponent implements OnInit {
  lat: number = 52.406376;
  lng: number = 16.925167;
  private _places: Array<PackData>;
  constructor(private service: MapsDataService) {}

  ngOnInit() {
    // this.service.getLocations().subscribe(res => {
    //   this._places = <Array<PackData>>res;
    //   console.log(this.places);
    // });
    this._places = <Array<PackData>>this.service.getLocations();
    this.places.push({
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
    });
    function compare(a, b) {
      if (a.Dlugosc > b.Dlugosc) return -1;
      if (a.Dlugosc < b.Dlugosc) return 1;
      return 0;
    }

    this._places.sort(compare);

    console.log(this.places);
  }

  markerClicked($data) {
    console.log($data);
  }

  get places() {
    return this._places;
  }
}
