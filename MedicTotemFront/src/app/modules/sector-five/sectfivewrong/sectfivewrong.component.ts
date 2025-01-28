import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectfivewrong',
  templateUrl: './sectfivewrong.component.html',
  styleUrls: ['./sectfivewrong.component.css']
})
export class SectfivewrongComponent {
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['sectfivehome']);
    }, 10000);
  }
}
