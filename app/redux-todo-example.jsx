var redux = require('redux');

console.log('Starting redux example');

var initialState = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default: return state;

  }
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'work'
});
console.log("searchText should be 'work'", store.getState());
