import { Component, OnInit, ViewChild } from "@angular/core";
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
  @ViewChild("slideBottom") slideBottomEl;
  private _address = "Poznań";
  private _price = "0";
  private _time = "0 dni";
  private _title = "Rekomendowany punkt odbioru";
  private _recommended: PackData;
  private _checked: PackData;

  lat: number = 52.406376;
  lng: number = 16.925167;
  private _places: Array<PackData> = null;
  constructor(private service: MapsDataService) {}

  backToRecommended() {
    this.setData(this._recommended);
  }

  getPriceByName($data) {
    if ($data === "PACZKOMAT") return "8,99";
    else return "9,90";
  }

  getDaysByName($data) {
    if ($data === "PACZKOMAT") return "1 - 2 dni";
    else return "1 - 3 dni";
  }

  slideBottomDiv() {
    console.log("ddf");
    this.slideBottomEl.nativeElement.classList.add("visible");
  }

  setData($data) {
    if ($data.typ === "main") return;
    this._address = `${$data.miasto}, ${$data.adres}`;
    this._price = `${this.getPriceByName($data.typ)} zł`;
    this._title = $data.typ.replace(/_/g, " ");
    this._time = `${this.getDaysByName($data.typ)}`;
    // console.log($data.godziny_odbioru.split(""));
  }

  ngOnInit() {
    this.service.getLocations(this.lat, this.lng).subscribe((res: any) => {
      this._places = <Array<PackData>>res;
      this._recommended = res[0];
      this._recommended.typ = "Rekomendowany punkt odbioru";
      this.setData(this._recommended);
      this.places.push({
        typ: "main",
        nazwa: "",
        adres: "",
        kod_pocztowy: "",
        miasto: "",
        dlugosc: this.lng.toString(),
        szerokosc: this.lat.toString(),
        godziny_odbioru: "",
        uwagi: ""
      });
      function compare(a, b) {
        if (a.dlugosc > b.dlugosc) return -1;
        if (a.dlugosc < b.dlugosc) return 1;
        return 0;
      }

      this._places.sort(compare);
      console.log(this.places);
    });
    // this._places = <Array<PackData>>this.service.getLocations();
    // this.places.push({
    //   Typ: "main",
    //   Nazwa: "",
    //   Adres: "",
    //   Kod_pocztowy: "",
    //   Miasto: "",
    //   Dlugosc: this.lng.toString(),
    //   Szerokosc: this.lat.toString(),
    //   Godziny_odbioru: "",
    //   Uwagi: ""
    // });
    // function compare(a, b) {
    //   if (a.Szerokosc > b.Szerokosc) return -1;
    //   if (a.Szerokosc < b.Szerokosc) return 1;
    //   return 0;
    // }

    // this._places.sort(compare);

    // console.log(this.places);
  }

  markerClicked($data) {
    this._checked = $data;
    this.setData($data);
    console.log($data);
  }

  get places() {
    return this._places;
  }

  get address() {
    return this._address;
  }

  get price() {
    return this._price;
  }

  get time() {
    return this._time;
  }

  get recommended() {
    return this._recommended;
  }

  get title() {
    return this._title;
  }

  get checked() {
    return this._checked;
  }
}
