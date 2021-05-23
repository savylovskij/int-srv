import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUsers } from '@int-srv/shared/utils/interfaces';
import { ApolloError } from '@apollo/client/core';

@Component({
  selector: 'int-srv-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileUiComponent {
  @Input()
  user: IUsers;

  @Input()
  failure: ApolloError;
}
