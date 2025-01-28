import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homedone',
  templateUrl: './homedone.component.html',
  styleUrls: ['./homedone.component.css']
})
export class HomedoneComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['home']);
    }, 10000);
  }
}

