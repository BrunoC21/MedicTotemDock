import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectonewrong',
  templateUrl: './sectonewrong.component.html',
  styleUrls: ['./sectonewrong.component.css']
})
export class SectonewrongComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['sectonehome']);
    }, 10000);
  }
}
