export default (state = { counter: 0, list: [] }, action) => {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      state.counter += 1;
      return state;
    case 'DECREMENT':
      state.counter -= 1;
      return state;
    case 'UPDATE_LIST':
      state.list = action.list;
      return state;
    default:
      return state;
  }
};
