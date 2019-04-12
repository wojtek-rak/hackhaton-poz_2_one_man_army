import { Component, OnInit } from "@angular/core";
import { PackData } from "../classes/pack-data";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  private _packes = true;
  constructor() {}

  ngOnInit() {}

  showPackes() {
    this._packes = true;
  }

  showHome() {
    this._packes = false;
  }

  get packes() {
    return this._packes;
  }
}
