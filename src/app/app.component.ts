import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { DateAdapter, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {
  MatDatepickerInput,
  MatDatepickerIntl,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { ThaiDatepickerModule} from './thai-datepicker/thai-datepicker.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import 'moment/locale/th.js'
import { PrimeNgComponent } from './prime-ng/prime-ng.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepickerModule,
    MatNativeDateModule,
    ThaiDatepickerModule,
    MatButtonModule,
    MatInputModule,
    PrimeNgComponent,
  ],
  template: `
<div class="flex justify-content-center align-items-center mt-5">
  <mat-form-field appearance="outline">
    <mat-label>ปฏิทิน ปีพุทธศักราช</mat-label>
    <input matInput [matDatepicker]="dp" />
    <mat-hint>{{dateFormatString()}}</mat-hint>
    <mat-datepicker-toggle matIconSuffix [for]="dp"></mat-datepicker-toggle>
    <mat-datepicker #dp></mat-datepicker>
  </mat-form-field>
</div>
<div class="flex justify-content-center align-items-center mt-8">
  <app-prime-ng />
</div>


  `,
  styles: [],
  providers: [
    MatDatepickerModule,
    ThaiDatepickerModule,
  ]
})
export class AppComponent implements OnInit {
  private readonly _adapter = inject<DateAdapter<unknown, unknown>>(DateAdapter);
  private readonly _intl = inject(MatDatepickerIntl);
  private readonly _locale = signal(inject<unknown>(MAT_DATE_LOCALE));
  readonly dateFormatString = computed(() => {
    if (this._locale() === 'ja-JP') {
      return 'YYYY/MM/DD';
    } else if (this._locale() === 'th') {
      return 'DD/MM/YYYY';
    }
    return '';
  });

  ngOnInit(): void {
    this.updateCloseButtonLabel('Close')
  }

  thaiLang() {
    this._locale.set('th-TH');
    this._adapter.setLocale(this._locale);
    this.updateCloseButtonLabel('ปิด');
  }

  updateCloseButtonLabel(label: string) {
    this._intl.closeCalendarLabel = label;
    this._intl.changes.next();
  }
}
