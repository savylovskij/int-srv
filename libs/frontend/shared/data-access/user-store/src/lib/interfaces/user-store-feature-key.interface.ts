import { USER_FEATURE_KEY } from '../+state/user.reducer';
import { IUserState } from './user-state.interface';

export interface IUserStoreFeatureKey {
  readonly [USER_FEATURE_KEY]: IUserState;
}
