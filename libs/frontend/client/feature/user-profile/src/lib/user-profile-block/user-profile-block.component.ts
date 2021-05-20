import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IUserFacade } from '@int-srv/frontend/shared/data-access/user-store';

@Component({
  selector: 'int-srv-user-profile-block',
  templateUrl: './user-profile-block.component.html',
  styleUrls: ['./user-profile-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileBlockComponent {
  constructor(public userFacade: IUserFacade) {
    this.userFacade.loadUser();
  }
}
