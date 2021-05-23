import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-sells',
  templateUrl: './sells.component.html',
  styleUrls: ['./sells.component.css']
})
export class SellsComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'search_panel', cols: 1, rows: 1 },
          { title: 'total_panel', cols: 1, rows: 1 },
          { title: 'list_panel', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'search_panel', cols: 4, rows: 1 },
        { title: 'total_panel', cols: 2, rows: 5 },
        { title: 'list_panel', cols: 4, rows: 4 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
