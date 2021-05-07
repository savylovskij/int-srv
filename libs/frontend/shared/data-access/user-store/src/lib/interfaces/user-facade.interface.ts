import { Observable } from 'rxjs';
import { IUsers } from '@int-srv/shared/utils/interfaces';

export abstract class IUserFacade {
  user$: Observable<IUsers>;
}
