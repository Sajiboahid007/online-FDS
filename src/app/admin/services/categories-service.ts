import { Injectable } from '@angular/core';
import { FDSConstant } from '../../fds-config/constant/fds-constant';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../fds-config/entity-models/categories';
import { AppQuery } from '../../shared/app-query';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private readonly http: HttpClient) {}

  baseUrl = FDSConstant.BaseUrl;

  getCategories(): Observable<AppQuery<Category[]>> {
    return this.http.get<AppQuery<Category[]>>(`${this.baseUrl}/categories/get`);
  }
}
