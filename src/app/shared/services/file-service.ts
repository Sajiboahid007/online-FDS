import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { FDSConstant } from '../../fds-config/constant/fds-constant';
import { AppQuery } from '../app-query';

interface FileUploadResponse {
  ImageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private readonly http: HttpClient) {}
  baseUrl = FDSConstant.BaseUrl;

  private readFileAsBase64(file: File): Observable<string> {
    return new Observable((observer) => {
      const reader = new FileReader();
      reader.onload = () => observer.next(reader.result as string);
      reader.onerror = (err) => observer.error(err);
      reader.readAsDataURL(file);
    });
  }

  public uploadFile(file: File) {
    return this.readFileAsBase64(file).pipe(
      switchMap((image) =>
        this.http.post<AppQuery<FileUploadResponse>>(`${this.baseUrl}/api/upload`, { image }),
      ),
    );
  }
}
