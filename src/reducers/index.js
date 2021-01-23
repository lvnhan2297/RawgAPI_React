import { combineReducers } from 'redux';
import GamesReducer from './GamesReducer';
import GenresReducer from './GenresReducer';
import GameItemReducer from './GameItemReducer';
import VideoReducer from './VideoReducer';

export default combineReducers({
  collectionGenres:GenresReducer,
  collectionGame:GamesReducer,
  collectionGamesDetail:GameItemReducer,
  actionVideo:VideoReducer
});