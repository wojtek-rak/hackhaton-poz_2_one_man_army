import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  constructor() {}

  turnDarkMode() {
    document.querySelector("body").classList.toggle("dark");
  }

  ngOnInit() {}
}
