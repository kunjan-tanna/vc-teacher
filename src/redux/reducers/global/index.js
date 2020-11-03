const initialState = {
  roles: [],
  tags: [],
  posts: [],
  comments: [],
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case 'ROLE':
      return Object.assign({}, state, { roles: action.payload });
    case 'TAG':
      return Object.assign({}, state, { tags: action.payload });
    case 'POST':
      return Object.assign({}, state, { posts: action.payload });
    case 'COMMENTS':
      return Object.assign({}, state, { comments: action.payload });
    default:
      return state;
  }
};

export default global;
