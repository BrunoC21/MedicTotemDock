import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectfivedone',
  templateUrl: './sectfivedone.component.html',
  styleUrls: ['./sectfivedone.component.css']
})
export class SectfivedoneComponent {
  constructor(private router: Router) {}
  
    ngOnInit() {
      setTimeout(() => {
        this.router.navigate(['sectfivehome']);
      }, 10000);
    }
}
