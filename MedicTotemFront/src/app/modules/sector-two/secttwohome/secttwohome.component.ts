import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RutGlobalService } from 'src/app/core/_services/rut-global.service';
import { UserService } from '../../../core/_services/user.service';

@Component({
  selector: 'app-secttwohome',
  templateUrl: './secttwohome.component.html',
  styleUrls: ['./secttwohome.component.css']
})
export class SecttwohomeComponent implements OnInit {
  content?: string;
  rutCorrecto=true;

  constructor(private userService: UserService, private rutGlobal: RutGlobalService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getPublicContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        if (err.error) {
          try {
            const res = JSON.parse(err.error);
            this.content = res.message;
          } catch {
            this.content = `Error with status: ${err.status} - ${err.statusText}`;
          }
        } else {
          this.content = `Error with status: ${err.status}`;
        }
      }
    });

    

    // Inicializar el teclado
    const inputField = document.getElementById('inputField') as HTMLInputElement;
    const keys = document.querySelectorAll('.key') as NodeListOf<HTMLButtonElement>;
    const backspaceKey = document.querySelector('.backspace') as HTMLButtonElement;

    // Evento para agregar valores al input
    keys.forEach((key: HTMLButtonElement) => {
      key.addEventListener('click', () => {
        const value: string = key.textContent || '';

        if (value !== '⟵') {
          if (inputField.value.replace('-', '').length < 9) {
            inputField.value += value;

            // Actualizar el formato del RUT
            inputField.value = this.formatRut(inputField.value);
          }
        }
      });
    });

    backspaceKey.addEventListener('click', () => {
      inputField.value = inputField.value.slice(0, -1);

      // Actualizar el formato del RUT después de borrar
      inputField.value = this.formatRut(inputField.value);
    });


  }

  /**
   * Formatea el valor como un RUT chileno.
   * Ejemplo: "12123123-4" o "1123123-4".
   */
  private formatRut(value: string): string {
    value = value.replace(/-/g, '');

    if (value.length > 1) {
      const body = value.slice(0, -1);
      const dv = value.slice(-1); // Dígito verificador
      return `${body}-${dv}`;
    }

    return value; 
  }

  guardarRut(): void {
    const inputField = document.getElementById('inputField') as HTMLInputElement;
    let rut = inputField.value;
    
    const [rutSinGuion, dv] = rut.split('-'); // Obtener la parte antes del guion
    const dvverify = this.calcularDigitoVerificador(rutSinGuion);
    console.log("dv: " + dv + ", dv resultado: " + dvverify);
    if(dvverify == dv){
      this.rutCorrecto=true;
      this.rutGlobal.setDv2(dv);
      this.rutGlobal.setRut2(rutSinGuion);
      console.log('RUT guardado:', rutSinGuion);
      
      this.router.navigate(['secttwooption']);
    }else{
      this.rutCorrecto=false;
    }
  }

  calcularDigitoVerificador(rut: string): string {

    const rutReverso = rut.split('').reverse().map(Number);

    const pesos = [2, 3, 4, 5, 6, 7];

    const suma = rutReverso.reduce((acc, digito, i) => {
        return acc + digito * pesos[i % pesos.length];
    }, 0);


    const resto = 11 - (suma % 11);

    if (resto === 11) {
        return "0";
    } else if (resto === 10) {
        return "K";
    } else {
        return resto.toString();
    }
  }
}
