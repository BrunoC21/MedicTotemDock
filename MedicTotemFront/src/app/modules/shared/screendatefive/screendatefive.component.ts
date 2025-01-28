import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MonitorService } from 'src/app/core/_services/monitor.service';
@Component({
  selector: 'app-screendatefive',
  templateUrl: './screendatefive.component.html',
  styleUrls: ['./screendatefive.component.css']
})
export class ScreendatefiveComponent implements OnInit, OnDestroy {

  tickets: any[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private monitorService: MonitorService) {}

  ngOnInit(): void {
    this.subscription.add(
      interval(5000).pipe(
        switchMap(() => this.monitorService.obtenerTicketsSector1())
      ).subscribe({
        next: (tickets: any[]) => {
          this.tickets = tickets
            .sort((a, b) => new Date(b.hora_llamada).getTime() - new Date(a.hora_llamada).getTime())
            .slice(0, 4);
          console.log('Tickets Sector 1 obtenidos y ordenados:', this.tickets);
        },
        error: (err: any) => {
          console.error('Error al obtener los tickets del Sector 1:', err);
        }
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}