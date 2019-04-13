import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { PackData } from "../classes/pack-data";
import { MapsDataService } from "../services/maps-data.service";
import { Globals } from "../classes/globals";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  @ViewChild("first") first;
  @ViewChild("second") second;
  @ViewChild("input") input;
  @ViewChild("appPackes") appPackes;
  private reversedCoords = "";
  private _delivery = "paczkomat";
  private _packes = true;
  // private _weather: any;
  constructor(private service: MapsDataService) {}

  changeLocation() {
    this.service
      .getLatLng(
        this.input.nativeElement.value.replace(/\s/g, "-").toLowerCase()
      )
      .subscribe((res: any) => {
        let latLng = res.split(",");
        // console.log(latLng);
        this.appPackes.changeLatLng(latLng[0], latLng[1]);
      });
  }

  deliveryType(text) {
    this.service
      .deliveryType(Globals.data.price, Globals.data.category, text)
      .subscribe(res => {
        if (res === "paczkomat") this.showPackes();
        //this._delivery = "paczkomat";
        else this.showHome(); // this._delivery = "kurier";
        // console.log(this._delivery);
      });
  }

  ngOnInit() {
    // console.log(Globals.data);

    if (Globals.data !== null) {
      let temp = "";
      let temp2 = "";
      let whose = 0;
      for (let i = 0; i < Globals.data.coords.length; i++) {
        if (whose === 0) {
          if (Globals.data.coords[i] !== ",") temp += Globals.data.coords[i];
        }
        if (Globals.data.coords[i] === ",") whose = 1;
        if (whose === 1) {
          if (Globals.data.coords[i] !== ",") temp2 += Globals.data.coords[i];
        }
      }
      let text = temp2 + "," + temp;
      this.deliveryType(text);
    } else {
      this.first.nativeElement.classList.remove("unactive");
      this.second.nativeElement.classList.add("unactive");
    }

    // this.getWeather();
  }

  // getWeather() {
  //   console.log(this.reversedCoords);
  //   this.service.getWeather(this.reversedCoords).subscribe(res => {
  //     console.log(res);
  //   });
  // }

  showPackes() {
    this.first.nativeElement.classList.remove("unactive");
    this.second.nativeElement.classList.add("unactive");
    this._packes = true;
  }

  showHome() {
    this.second.nativeElement.classList.remove("unactive");
    this.first.nativeElement.classList.add("unactive");
    this._packes = false;
  }

  get packes() {
    return this._packes;
  }

  // get weather() {
  //   return this._weather;
  // }
}
