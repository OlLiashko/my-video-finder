import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FinderRouting} from "./finder-routing";
import {FinderPageComponent} from "../../components/finder/finder-page/finder-page.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    FinderPageComponent,
  ],
  imports: [
    CommonModule,
    FinderRouting,
    SharedModule
  ]
})
export class FinderModule { }
