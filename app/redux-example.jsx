var redux = require('redux');

console.log('Starting redux example');

var initialState = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
}
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies, {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
          hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies, {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };
      case 'REMOVE_MOVIE':
        return {
          ...state,
            movies: state.movies.filter((movie) => movie.id !== action.id)
        };
    default:
      return state;

  }
  return state;
};
var store = redux.createStore(reducer, redux.compose(window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));

// subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New State ', store.getState());
});

// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({type: 'CHANGE_NAME', name: 'Vineet'});

store.dispatch({type: 'ADD_HOBBY', hobby: 'Running'});

store.dispatch({type: 'ADD_HOBBY', hobby: 'Walking'});

store.dispatch({type: 'REMOVE_HOBBY', id: 2});

store.dispatch({type: 'ADD_MOVIE', title: 'Into the wild', genre: 'Travelling'});

store.dispatch({type: 'ADD_MOVIE', title: 'Terminator', genre: 'Action'});

store.dispatch({type: 'REMOVE_MOVIE', id: 1});

store.dispatch({type: 'CHANGE_NAME', name: 'Sandeep'});
