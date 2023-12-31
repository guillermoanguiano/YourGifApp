import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Implementar despues"
      #txtTagInput
      (keyup.enter)="searchTag()"
    >
  `,
  styleUrl: './search-box.component.css'
}) // Al poner un #txtTagInput es como crear una variable, id o clase local para poder seleccionar el elemento o mejor dicho una referencia local

export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor( private GifsService: GifsService ) {}

  searchTag():void {
    const newTag = this.tagInput.nativeElement.value;

    this.GifsService.searchTag( newTag );

    this.tagInput.nativeElement.value = '';
  }

}
