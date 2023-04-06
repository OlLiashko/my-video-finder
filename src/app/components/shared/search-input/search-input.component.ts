import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {debounceTime, distinctUntilChanged, map, tap} from "rxjs";

@UntilDestroy()
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})

export class SearchInputComponent implements OnInit {

  formControl: FormControl;

  @Output() onInput = new EventEmitter<string>();

  ngOnInit(): void {
    this.formControl = new FormControl();
    this.subscribeOnValueChange();
  }

  private subscribeOnValueChange() {
    this.formControl.valueChanges
      .pipe(
        untilDestroyed(this),
        debounceTime(350),
        map((value: string) => value.trim()),
        distinctUntilChanged(),
        tap(value => this.onInput.emit(value))
      ).subscribe();
  }
}
