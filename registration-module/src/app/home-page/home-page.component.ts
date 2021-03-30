import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '.././user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  model = {
    firstName: null,
    lastName: null,
    workEmail: null,
    monthlyBudget: null,
    telephone: null,
  };
  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    this.service.setValues(this.model);
    this.router.navigate(['/confirmation-page']);
  }
}
