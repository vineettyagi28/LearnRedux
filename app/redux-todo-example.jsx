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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Vineet'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Sandeep'
});
