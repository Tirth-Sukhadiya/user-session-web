import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { DataCaptureService } from 'src/app/shared/services/data-capture.service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit, OnDestroy {
  userDetail: User;
  userData: User;
  dataCapSub: Subscription;

  constructor(private router: Router,
    private dataCaptureService: DataCaptureService) {
    this.dataCapSub = this.dataCaptureService.$data.subscribe((_userData) => {
      this.userData = _userData ?? <User>JSON.parse(localStorage.getItem("user"));
    });
  }

  ngOnInit(): void {
    this.userDetail = this.userData;
  }

  ngOnDestroy(): void {
    this.dataCapSub.unsubscribe();
  }

  signout() {
    localStorage.clear();
    this.dataCaptureService.setData(null);
    this.router.navigate(["sessions"]);
  }

}
