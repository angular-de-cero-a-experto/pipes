import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent {


  public nameLower: string = 'Fernando';
  public nameUpper: string = 'FERNANDO';
  public fullName: string = 'fErNaNDo AlBeRtO';

  public customDate: Date = new Date(); // 2023-10-05T00:00:00Z

}
