import { Component, OnInit } from '@angular/core';
import { UserService } from '.././user.service';
import { ProductInfo } from '.././store';

@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css'],
})
export class ConfirmationPageComponent implements OnInit {
  public info: ProductInfo;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    let temp = this.service.getValues();
    this.info = temp;
  }
}
