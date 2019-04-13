import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgmCoreModule } from "@agm/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MapsDataService } from "./services/maps-data.service";
import { AppComponent } from "./app.component";
import { MenuComponent } from "./menu/menu.component";
import { HeroComponent } from "./hero/hero.component";
import { PackesComponent } from "./packes/packes.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { HomepageComponent } from "./homepage/homepage.component";
import { InstructionComponent } from "./instruction/instruction.component";

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
  },
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "instruction",
    component: InstructionComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    PackesComponent,
    HomeComponent,
    HomepageComponent,
    InstructionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({}),
    FormsModule, // <========== Add this line!
    ReactiveFormsModule
  ],
  providers: [MapsDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
