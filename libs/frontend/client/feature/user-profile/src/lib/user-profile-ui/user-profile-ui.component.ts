import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { IUserFacade } from '@int-srv/frontend/shared/data-access/user-store';

@Component({
  selector: 'int-srv-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileUiComponent implements OnInit {
  ngOnInit(): void {
    this.userFacade.loadUser();
  }

  constructor(private userFacade: IUserFacade) {}
}
