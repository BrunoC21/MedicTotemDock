import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secttwodone',
  templateUrl: './secttwodone.component.html',
  styleUrls: ['./secttwodone.component.css']
})
export class SecttwodoneComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['secttwohome']);
    }, 10000);
  }
}
