import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { IUserFacade } from '@int-srv/frontend/shared/data-access/user-store';

@Component({
  selector: 'int-srv-user-profile-ui',
  templateUrl: './user-profile-block.component.html',
  styleUrls: ['./user-profile-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileBlockComponent implements OnInit {
  ngOnInit(): void {
    this.userFacade.loadUser();
  }

  constructor(private userFacade: IUserFacade) {}
}
