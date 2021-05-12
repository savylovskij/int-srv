import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'int-srv-auth-ui',
  templateUrl: './auth-ui.component.html',
  styleUrls: ['./auth-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthUiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
