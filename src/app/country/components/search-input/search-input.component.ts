import { Component, input, InputOptions, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss'
})
export class SearchInputComponent {
  placeholder = input<string>('Buscar');
  emitValue = output<string>();

  onSearch(value: string) {
    this.emitValue.emit(value);
  }
}
