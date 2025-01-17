import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';

export interface Car {
  vin: any;
  year: any;
  brand: any;
  color: any;
}

@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [
    TableModule
  ],
  template: `
    <div class="card">
      <div class="flex-auto">
        <p-table
          [value]="cars"
          responsiveLayout=""
          [breakpoint]="'960px'"
          [paginator]="true"
          [rows]="5"
          [rowsPerPageOptions]="[5, 10, 20]"
        >
          <ng-template pTemplate="header">
            <tr>
              <th>Vin</th>
              <th>Year</th>
              <th>Brand</th>
              <th>Color</th>
            </tr>
          </ng-template>
          <ng-template pTemplate="body" let-car>
            <tr>
              <td>{{ car.vin }}</td>
              <td>{{ car.year }}</td>
              <td>{{ car.brand }}</td>
              <td>{{ car.color }}</td>
            </tr>
          </ng-template>
        </p-table>
      </div>

    </div>
  `,
  styles: ``
})
export class PrimeNgComponent implements OnInit {
cars: Car[]  = [];

  ngOnInit(): void {
    this.cars = [
      { "brand": "Volkswagen", "year": 2012, "color": "White", "vin": "dsad231ff" },
      { "brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345" },
      { "brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr" },
      { "brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh" },
      { "brand": "Mercedes", "year": 1995, "color": "White", "vin": "hrtwy34" },
      { "brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj" },
      { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr" },
      { "brand": "Jaguar", "year": 2013, "color": "White", "vin": "greg34" },
      { "brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5" },
      { "brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s" }
    ]
  }
}
