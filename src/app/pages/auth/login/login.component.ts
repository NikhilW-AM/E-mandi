import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  isLoading: boolean = false
  constructor(
    private _fb: FormBuilder,
    private http: HttpService) { }
  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  doLogin() {
    this.isLoading = true
    this.http.simplePost('users/api/v1/users/login/', this.loginForm.value).subscribe({
      next: (resp) => {
        console.log(resp);
        this.isLoading = false
      },
      error: (err) => {
        this.isLoading = false

      },
      complete: () => {
        this.isLoading = false
      }
    })
  }
}
