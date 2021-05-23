import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IAuthFacade } from '@int-srv/frontend/shared/data-access/auth-store';

@Component({
  selector: 'int-srv-auth-ui',
  templateUrl: './auth-block.component.html',
  styleUrls: ['./auth-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthBlockComponent {
  onLogin(loginPayload): void {
    console.log(loginPayload);
    this.authFacade.signInSet({
      username: loginPayload.login,
      password: loginPayload.password,
    });
    this.authFacade.signIn();
  }

  constructor(public authFacade: IAuthFacade) {}
}
