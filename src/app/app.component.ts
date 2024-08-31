import { Component } from '@angular/core';
import { AccordionComponent } from './accordion.component';
import { DataTableComponent } from './table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent, DataTableComponent],
  template: `
    <ng-accordion />

    <ng-data-table />
  `,
})
export class AppComponent {
  title = 'ng-spartan-ui-table';
}
