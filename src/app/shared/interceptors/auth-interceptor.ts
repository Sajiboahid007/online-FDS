import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { LocalStorageService } from '../../admin/services/local-storage.service';
import { FDSConstant } from '../../fds-config/constant/fds-constant';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const requestedUrl = request?.url;

  if (!requestedUrl.startsWith(FDSConstant.BaseUrl)) {
    return next(request);
  }

  if (FDSConstant.AnonymousUrls.includes(requestedUrl.replace(FDSConstant.BaseUrl, ''))) {
    return next(request);
  }

  const localStorageService = inject(LocalStorageService);
  const jwtToken: any = localStorageService.getItem(FDSConstant.JwtTokenKey);

  if (!jwtToken) {
    const router = inject(Router);
    router.navigate(['/login']);
    return EMPTY; // cancels HTTP request
  }

  const cloned = request.clone({
    setHeaders: {
      Authorization: `Bearer ${jwtToken}`,
    },
  });

  return next(cloned);
};
