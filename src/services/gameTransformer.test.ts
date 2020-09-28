import { GameTransformer } from './gameTransformer';

import gameData from './input/game.json';
import gameDataList from './input/gameList.json';
import expectedGame from './expected/game.json';
import expectedGameList from './expected/gameList.json';

test('should return instance of game', () => {
  const gameInstance = GameTransformer.createGame(gameData);

  expect(gameInstance).toEqual(expectedGame);
});

test('should return list of game instances', () => {
  const gameList = GameTransformer.createGameList(gameDataList);

  expect(gameList).toEqual(expectedGameList);
});
