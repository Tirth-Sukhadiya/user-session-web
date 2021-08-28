import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { DataCaptureService } from 'src/app/shared/services/data-capture.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signinForm: FormGroup;
  errorMsg = '';
  return: string;

  constructor(private router: Router,
    private fb: FormBuilder,
    private dataCaptureService: DataCaptureService) {
    this.signinForm = this.fb.group({
      username: ['admin@email.com', Validators.required],
      password: ['admin', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  signin() {
    const signinData = this.signinForm.value
    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';

    setTimeout(() => {
      if ((signinData.username == "admin" || signinData.username == "admin@email.com")
        && signinData.password == "admin") {
        this.submitButton.disabled = false;
        this.progressBar.mode = 'determinate';

        let userDetail = <User>{
          id: 1,
          name: "Admin User",
          email: signinData.username,
          password: signinData.password,
        };
        // save user info into service or localstorage to validate user on every refresh
        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(userDetail));
        this.dataCaptureService.setData(userDetail);

        this.router.navigate(["home"]);
      }
      else {
        this.errorMsg = "Invalid username or password!";
        this.submitButton.disabled = false;
        this.progressBar.mode = 'determinate';
      }
    }, 200);
  }

}
