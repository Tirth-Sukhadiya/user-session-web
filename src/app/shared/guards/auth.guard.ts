import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { DataCaptureService } from '../services/data-capture.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userDetails: User;
  dataCapSub: Subscription;
  constructor(private router: Router,
    private dataCaptureService: DataCaptureService) {
    this.dataCapSub = this.dataCaptureService.$data.subscribe((_userData) => {
      this.userDetails = _userData ?? <User>JSON.parse(localStorage.getItem("user"));
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!(this.userDetails != null && typeof this.userDetails != "undefined")) {
      this.router.navigate(["sessions"]);
      return false;
    }
    return true;
  }
}
