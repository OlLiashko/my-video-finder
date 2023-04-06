import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {FinderPageComponent} from "../../components/finder/finder-page/finder-page.component";

export const appRoutes: Routes = [
  {
    path: '',
    component: FinderPageComponent,
  },
];
export const FinderRouting: ModuleWithProviders<RouterModule> = RouterModule.forChild(appRoutes);
