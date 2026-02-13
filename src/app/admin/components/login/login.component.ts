import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FDSConstant } from '../../../fds-config/constant/fds-constant';
import { LocalStorageService } from '../../../shared/service/local-storage.service';
import { LoginService } from '../../../shared/service/login-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly loginService: LoginService,
    private readonly localStorageService: LocalStorageService,
  ) {}
  ngOnInit(): void {
    this.loginForm = this.loginService.getLoginForm();
  }

  public onLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    const data = this.loginForm.getRawValue();

    this.loginService.login(data).subscribe({
      next: (res) => {
        console.log(res);
        this.localStorageService.setItem(FDSConstant.JwtTokenKey, res?.token);
        this.localStorageService.setItem(FDSConstant.RefreshTokenKey, res?.refreshToken);

        console.debug('token', this.localStorageService.getItem(FDSConstant.JwtTokenKey));
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
