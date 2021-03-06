import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { RouterModule } from "@angular/router";
import { MapPage } from "./map.page";
import { HttpModule } from "@angular/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpModule,
    RouterModule.forChild([
      {
        path: "",
        component: MapPage
      }
    ])
  ],
  declarations: [MapPage]
})
export class MapPageModule {}
