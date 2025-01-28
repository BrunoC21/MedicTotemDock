import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectfourwrong',
  templateUrl: './sectfourwrong.component.html',
  styleUrls: ['./sectfourwrong.component.css']
})
export class SectfourwrongComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['sectfourhome']);
    }, 10000);
  }
}
