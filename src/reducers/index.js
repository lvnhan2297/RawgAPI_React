import { combineReducers } from 'redux';
import GamesReducer from './GamesReducer';
import GenresReducer from './GenresReducer';

export default combineReducers({
  collectionGenres:GenresReducer,
  collectionGame:GamesReducer,
});