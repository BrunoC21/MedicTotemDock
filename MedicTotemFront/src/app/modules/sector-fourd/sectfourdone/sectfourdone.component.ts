import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectfourdone',
  templateUrl: './sectfourdone.component.html',
  styleUrls: ['./sectfourdone.component.css']
})
export class SectfourdoneComponent {
  constructor(private router: Router) {}
  
    ngOnInit() {
      setTimeout(() => {
        this.router.navigate(['sectfourhome']);
      }, 10000);
    }
}
