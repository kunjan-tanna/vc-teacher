const initialState = {
  userInfo: '',
  accessToken: '',
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_WITH_JWT':
      return Object.assign({}, state, {
        userInfo: action.payload.userInfo,
        accessToken: action.payload.accessToken,
      });
    case 'LOGOUT':
      return initialState;

    default:
      return state;
  }
};
