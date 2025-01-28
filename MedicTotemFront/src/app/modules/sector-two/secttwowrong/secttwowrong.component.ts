import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secttwowrong',
  templateUrl: './secttwowrong.component.html',
  styleUrls: ['./secttwowrong.component.css']
})
export class SecttwowrongComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['secttwohome']);
    }, 10000);
  }
}
