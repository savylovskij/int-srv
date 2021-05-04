import { Observable } from 'rxjs';
import { IUsers } from '@int-srv/shared/data-access/interfaces';

export abstract class IUserFacade {
  user$: Observable<IUsers>;
}
