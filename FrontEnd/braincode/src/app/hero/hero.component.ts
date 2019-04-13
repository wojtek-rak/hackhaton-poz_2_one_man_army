import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { PackData } from "../classes/pack-data";
import { MapsDataService } from "../services/maps-data.service";

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
  private _packes = true;
  constructor(private service: MapsDataService) {}

  changeLocation() {
    this.service
      .getLatLng(
        this.input.nativeElement.value.replace(/\s/g, "-").toLowerCase()
      )
      .subscribe((res: any) => {
        let latLng = res.split(",");
        console.log(latLng);
        this.appPackes.changeLatLng(latLng[0], latLng[1]);
      });
  }

  ngOnInit() {
    this.first.nativeElement.classList.remove("unactive");
    this.second.nativeElement.classList.add("unactive");
  }

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
}
