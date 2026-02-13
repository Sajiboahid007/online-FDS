import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FDSConstant } from '../../fds-config/constant/fds-constant';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = FDSConstant.BaseUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly fb: FormBuilder,
  ) {}

  getLoginForm(): FormGroup {
    const loginForm = this.fb.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
    });

    return loginForm;
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/login`, data);
  }
}
