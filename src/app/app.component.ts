import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './shared/models/user.model';
import { DataCaptureService } from './shared/services/data-capture.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  dataCapSub: Subscription;
  userDetails: User;
  constructor(private router: Router,
    private dataCaptureService: DataCaptureService) {
    this.dataCapSub = this.dataCaptureService.$data.subscribe((_userData) => {
      this.userDetails = _userData ?? <User>JSON.parse(localStorage.getItem("user"));
    });
  }

  ngOnInit(): void {
    if (!(this.userDetails != null && typeof this.userDetails != "undefined")) {
      this.router.navigate(["sessions"]);
    }
    else {
      this.router.navigate(["home"]);
    }
  }

  ngOnDestroy(): void {
    this.dataCapSub.unsubscribe();
  }
}
