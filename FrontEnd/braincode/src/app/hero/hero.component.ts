import { Component, OnInit, ViewChild } from "@angular/core";
import { PackData } from "../classes/pack-data";

@Component({
  selector: "app-hero",
  templateUrl: "./hero.component.html",
  styleUrls: ["./hero.component.css"]
})
export class HeroComponent implements OnInit {
  @ViewChild("first") first;
  @ViewChild("second") second;
  private _packes = true;
  constructor() {}

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
