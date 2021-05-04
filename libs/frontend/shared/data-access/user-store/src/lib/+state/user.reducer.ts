export const USER_FEATURE_KEY = 'user';

/*const userReducer = createReducer(
  initialState,
  on(UserActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(UserActions.loadUserSuccess, (state, { user }) =>
    userAdapter.setAll(user, { ...state, loaded: true })
  ),
  on(UserActions.loadUserFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}*/
