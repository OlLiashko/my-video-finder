import { NgModule } from '@angular/core';
import {SearchInputComponent} from "../../components/shared/search-input/search-input.component";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {SafePipe} from "../../pipes/safe-url/safe.pipe";
import {CategoriesSelectorComponent} from "../../components/shared/categories-selector/categories-selector.component";
import {NgForOf} from "@angular/common";

const SHARED_MODULES = [
  MatInputModule,
  MatSelectModule,
  ReactiveFormsModule
];

const SHARED_COMPONENTS = [
  SearchInputComponent,
  CategoriesSelectorComponent,
];

const SHARED_PIPES = [
  SafePipe
];

const SHARED_DIRECTIVES = [];

@NgModule({
  imports: [
    ...SHARED_MODULES,
    NgForOf
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
  ],

  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    ...SHARED_PIPES,
  ]
})
export class SharedModule { }
