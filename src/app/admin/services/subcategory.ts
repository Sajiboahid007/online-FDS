import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FDSConstant } from '../../fds-config/constant/fds-constant';
import { AppQuery } from '../../shared/app-query';

@Injectable({
  providedIn: 'root',
})
export class Subcategory {
  constructor(private readonly http: HttpClient) {}
  baseUrl = FDSConstant.BaseUrl;

  public getSubcategories(): Observable<AppQuery<Subcategory[]>> {
    return this.http.get<AppQuery<Subcategory[]>>(`${this.baseUrl}/api/sub-categories/get`);
  }
}
