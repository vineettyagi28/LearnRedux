var redux = require('redux');

console.log('Starting redux example');

var initialState = {
  searchText: '',
  showCompleted: false,
  todos: []
}

var reducer = (state = initialState, action) => {
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
