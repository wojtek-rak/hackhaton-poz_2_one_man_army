import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgmCoreModule } from "@agm/core";

import { MapsDataService } from "./services/maps-data.service";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { HeroComponent } from "./hero/hero.component";
import { PackesComponent } from "./packes/packes.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  {
    path: "",
    component: HeroComponent
    // children: [
    //   {
    //     path: "",
    //     component: PackesComponent
    //   },
    //   {
    //     path: "home_delivery",
    //     component: HomeComponent
    //   }
    // ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    PackesComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({})
  ],
  providers: [MapsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
