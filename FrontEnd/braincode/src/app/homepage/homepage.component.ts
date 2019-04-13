import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Globals } from "../classes/globals";
import { Router } from "@angular/router";
import { MapsDataService } from "../services/maps-data.service";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  @ViewChild("input") input;
  constructor(private router: Router, private service: MapsDataService) {}

  submitForm(form: NgForm) {
    this.service
      .getLatLng(
        this.input.nativeElement.value.replace(/\s/g, "-").toLowerCase()
      )
      .subscribe((res: any) => {
        form.value.coords = res;
        Globals.data = form.value;
        this.router.navigateByUrl("/");
      });
  }

  ngOnInit() {}
}
