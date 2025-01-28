
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(//reparar esto
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (true/*this.authService.isAuthenticated()*/) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige a la página de inicio de sesión si no está autenticado
      return false;
    }
  }
}
