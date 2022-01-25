import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cap-angular';
  loading = false;

  constructor(private commonSvc: CommonService, private sbacjBar: MatSnackBar){
    this.commonSvc.loading.subscribe(loading => {
      this.loading = loading;
    });

    this.commonSvc.message.subscribe(msg => {
      this.sbacjBar.open(msg, 'OK',{
        duration: 3000
      });
    });
  }
}
