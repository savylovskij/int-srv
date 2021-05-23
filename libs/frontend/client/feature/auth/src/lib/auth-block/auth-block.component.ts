import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ISignAuthPayload } from '@int-srv/shared/utils/interfaces';
import { IAuthFacade } from '@int-srv/frontend/shared/data-access/auth-store';

@Component({
  selector: 'int-srv-auth-ui',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBlockComponent {
  onLogin(loginPayload: ISignAuthPayload): void {
    console.log(loginPayload);
    this.authFacade.signInSet(loginPayload);
    //this.authFacade.signIn();
  }

  constructor(public authFacade: IAuthFacade) {}
}
