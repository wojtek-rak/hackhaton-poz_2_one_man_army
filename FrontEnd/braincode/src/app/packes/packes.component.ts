import { Component, OnInit, ViewChild, ɵConsole } from "@angular/core";
import { MapsDataService } from "../services/maps-data.service";
import { PackData } from "../classes/pack-data";
import { longStackSupport } from "q";
import { last } from "@angular/router/src/utils/collection";
import { Globals } from "../classes/globals";

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
  private _timeToGet = "0 min";
  private _delivery = "paczkomat";
  private _weather = null;

  lat: number; // = 52.406376;
  lng: number; // = 16.925167;
  private _places: Array<PackData> = null;
  constructor(private service: MapsDataService) {}

  public changeLatLng(lat, lng) {
    this.showWeather();
    this.lat = Number(lat);
    this.lng = Number(lng);
    this.getMarks();
  }

  backToRecommended() {
    this._checked = this._recommended;
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
    // console.log("ddf");
    this.slideBottomEl.nativeElement.classList.add("visible");
  }

  getTimeToDestination() {
    this.service
      .getDestination(
        `${this.lat},${this.lng}`,
        `${this._checked.szerokosc},${this._checked.dlugosc}`
      )
      .subscribe((res: any) => {
        let minutes = Math.round(res.travelTimeInSeconds / 60);
        this._timeToGet = `${minutes} min`;
      });
  }

  setData($data) {
    if ($data.typ === "main") return;
    this._address = `${$data.miasto}, ${$data.adres}`;
    this._price = `${this.getPriceByName($data.typ)} zł`;
    this._title = $data.typ.replace(/_/g, " ");
    this._time = `${this.getDaysByName($data.typ)}`;
    this.getTimeToDestination();
  }

  getMarks() {
    this.service.getLocations(this.lat, this.lng).subscribe((res: any) => {
      this._places = <Array<PackData>>res;
      this._recommended = res[0];
      this._checked = this._recommended;
      this._recommended.typ = "Rekomendowany punkt odbioru";
      this.setData(this._recommended);
      this._places.push({
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
    });
  }

  // deliveryType(text) {
  //   this.service
  //     .deliveryType(Globals.data.price, Globals.data.category, text)
  //     .subscribe(res => {
  //       if (res === "paczkomat") this._delivery = "paczkomat";
  //       else this._delivery = "kurier";
  //     });
  // }

  ngOnInit() {
    if (Globals.data === null) {
      this.lat = 52.406376;
      this.lng = 16.925167;
    } else {
      // let temp = "";
      // let temp2 = "";
      // let whose = 0;
      // for (let i = 0; i < Globals.data.coords.length; i++) {
      //   if (whose === 0) {
      //     if (Globals.data.coords[i] !== ",") temp += Globals.data.coords[i];
      //   }

      //   if (Globals.data.coords[i] === ",") whose = 1;

      //   if (whose === 1) {
      //     if (Globals.data.coords[i] !== ",") temp2 += Globals.data.coords[i];
      //   }
      // }

      // let text = temp2 + "," + temp;

      let latLng = Globals.data.coords.split(",");
      this.lat = Number(latLng[0]);
      this.lng = Number(latLng[1]);
      // this.deliveryType(text);
    }
    this.showWeather();
    this.getMarks();
  }

  markerClicked($data) {
    this._checked = $data;
    this.setData($data);
    // console.log($data);
  }

  showWeather() {
    console.log(this.lat, this.lng);
    this.service.getWeather(`${this.lng}, ${this.lat}`).subscribe(res => {
      console.log(res);
      this._weather = res;
    });
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

  get timeToGet() {
    return this._timeToGet;
  }

  get weather() {
    return this._weather;
  }
}
