var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New State ', store.getState());

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading....';
  }else if (state.map.url){
    document.getElementById('app').innerHTML = '<a target="_blank" href="'+ state.map.url +'">View your location</a>';
  }
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Vineet'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));

store.dispatch(actions.removeHobby(2));

store.dispatch(actions.addMovie('Into the wild', 'Travelling'));

store.dispatch(actions.addMovie('Terminator', 'Action'));

store.dispatch(actions.removeMovie(1));

store.dispatch(actions.changeName('Sandeep'));
