import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectonedone',
  templateUrl: './sectonedone.component.html',
  styleUrls: ['./sectonedone.component.css']
})
export class SectonedoneComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['sectonehome']);
    }, 10000);
  }
}
