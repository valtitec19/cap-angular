import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { User } from '../model/model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  loading = false;
  user?: User;

  constructor(
    private route: ActivatedRoute,
    private usersSvc: UsersService,
    private commonSvc: CommonService,
    ) {
      this.route.params.subscribe(parameters => {

        this.commonSvc.loading.subscribe(loading => {
          this.loading = loading;
        });

        if (parameters['id']){

          this.commonSvc.loading.next(true);
          this.usersSvc.getSigleUser(parameters['id']).subscribe(response => {
            this.user = response.data;
            this.commonSvc.loading.next(false);
          }, () => {
            this.commonSvc.message.next('Usuario no encontrado');
            this.commonSvc.loading.next(false);
          });
        }
      });


     }

  ngOnInit(): void {
  }

}
