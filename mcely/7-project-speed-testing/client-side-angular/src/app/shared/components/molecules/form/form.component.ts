import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Input() form: any;

  options: any[] = [
    { value: 'one', option: 'First Option :)' },
    { value: 'two', option: 'Second Option :(' },
    { value: '2', option: 'Third Option :(' },
    { value: '3', option: 'Fourth Option :(' },
    { value: '4', option: 'Fifth Option :(' },
    { value: '5', option: 'Sixth Option :(' },
  ];
}
