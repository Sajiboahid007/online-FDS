import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
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
  loginInProgress = false;

  constructor(
    private readonly loginService: LoginService,
    private readonly localStorageService: LocalStorageService,
    private readonly router: Router,
    private readonly cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this.loginForm = this.loginService.getLoginForm();
  }

  public onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.cdr.detectChanges();
      return;
    }

    this.loginInProgress = true;
    this.cdr.detectChanges();

    const data = this.loginForm.getRawValue();
    this.loginService
      .login(data)
      .pipe(
        finalize(() => {
          this.loginInProgress = false;
          this.cdr.detectChanges();
        }),
      )
      .subscribe({
        next: (res) => {
          this.localStorageService.setItem(FDSConstant.JwtTokenKey, res?.token);
          this.localStorageService.setItem(FDSConstant.RefreshTokenKey, res?.refreshToken);
          this.router.navigate(['dashboard']);
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
