import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { StorageService } from './core/_services/storage.service';
import { AuthService } from './core/_services/auth.service';
import { EventBusService } from './core/_shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  currentTime: string = '';
  currentDate: string = '';
  showNavbar = true;

  eventBusSub?: Subscription;
  routerSub?: Subscription;

  constructor(
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Rutas donde no se muestra la navbar
        const hiddenNavbarRoutes = ['/screendate'];
        this.showNavbar = !hiddenNavbarRoutes.includes(event.urlAfterRedirects);
      }
    });

    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_VISADOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });

    this.startClock();

    // Escucha los cambios de ruta para actualizar la navbar
    this.routerSub = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.navbarColor();
      });

    // Llamar por primera vez
    this.navbarColor();
  }

  ngOnDestroy(): void {
    this.eventBusSub?.unsubscribe();
    this.routerSub?.unsubscribe();
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();
        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  startClock(): void {
    setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      this.currentDate = now.toLocaleDateString('es-CL', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }, 1000);
  }


  navbarColor(): void {
    const currentPage = window.location.pathname.split('/').pop();
    const navbar = document.getElementById('navbar');

    console.log(navbar);
    console.log('Página actual: ' + currentPage);

    if (navbar) {
      navbar.classList.remove('bg-medic', 'bg-dark'); // Limpia clases previas
      if (currentPage?.includes('login') || currentPage?.includes('medic')) {
        navbar.classList.add('bg-medic');
      } else {
        navbar.classList.add('bg-dark');
      }
    }
  }
}
