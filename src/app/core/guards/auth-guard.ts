import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {inject, Injectable} from '@angular/core';
import {AppRoutes} from '../constants/const';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  private authorizationStatus = false;
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (this.authorizationStatus === true) {
      return true
    } else {
      return this.router.createUrlTree([AppRoutes.LOGIN], {queryParams: {redirectUrl: state.url}});
    }
  }
}

