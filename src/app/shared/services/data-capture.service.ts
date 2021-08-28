import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataCaptureService {

  private dataTransferObj: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor() { }

  get $data() {
    return this.dataTransferObj.asObservable();
  }

  setData(value: User) {
    this.dataTransferObj.next(value);
  }
}
