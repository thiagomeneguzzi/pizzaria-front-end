import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FinalizeOrderGuard implements CanLoad {

  constructor(
    private router: Router
  ) {}

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const orders = localStorage.getItem('pedido')
    
    if(!orders) {
      this.router.navigate(['/home']) 
      return false
    }

    return true
  }

  
}
