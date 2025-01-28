import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/core/_services/ticket.service';

@Component({
  selector: 'app-homeprint',
  templateUrl: './homeprint.component.html',
  styleUrls: ['./homeprint.component.css']
})
export class HomeprintComponent implements OnInit{
ticketNumber: number | null = 1;
  currentDate: Date = new Date();
  currentTime: Date = new Date();
  citaHora: string = '10:00'; // Puedes ajustar esto según sea necesario
  clienteRut: string = '12345678-9'; // Puedes ajustar esto según sea necesario

  constructor(private ticketService: TicketService) {}

  ngOnInit(): void {
    this.getNextTicketNumber();
    this.updateTime();
  }

  // Obtiene el próximo número de ticket
  getNextTicketNumber(): void {
    this.ticketService.getNextTicketNumber().subscribe({
      next: (number: number) => {
        this.ticketNumber = number;
      },
      error: (err: any) => {
        console.error('Error al obtener el número de ticket:', err);
      }
    });
  }

  // Actualiza la hora en tiempo real
  updateTime(): void {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  // Imprime el ticket
  printTicket(): void {
    const printableContent = document.getElementById('printableArea');
  
    if (printableContent) {
      // Clonar el contenido del ticket
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printableContent.outerHTML;
  
      // Imprimir el área seleccionada
      window.print();
  
      // Restaurar el contenido original de la página
      document.body.innerHTML = originalContent;
      window.location.reload(); // Recarga para restablecer eventos y estado
    } else {
      console.error('No se encontró el área imprimible.');
    }
  }
  
}
