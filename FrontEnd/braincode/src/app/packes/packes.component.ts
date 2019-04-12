import { Component, OnInit } from "@angular/core";
import { MapsDataService } from "../services/maps-data.service";
import { PackData } from "../classes/pack-data";

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
    this._places = this.service.getLocations();
  }

  markerClicked($data) {
    console.log($data);
  }

  get places() {
    return this._places;
  }
}
