import { NgModule } from '@angular/core';
import {SearchInputComponent} from "../../components/shared/search-input/search-input.component";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {SafePipe} from "../../pipes/safe-url/safe.pipe";

const SHARED_MODULES = [
  MatInputModule,
  MatSelectModule,
  ReactiveFormsModule
];

const SHARED_COMPONENTS = [
  SearchInputComponent
];

const SHARED_PIPES = [
  SafePipe
];

const SHARED_DIRECTIVES = [];

@NgModule({
  imports: [
    ...SHARED_MODULES
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
