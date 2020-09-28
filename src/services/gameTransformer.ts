import { Game } from '../models/game';
import { SteamGame } from '../models/steam';
import { setFlagsFromString } from 'v8';

export class GameTransformer {
  static createGame(gameData: SteamGame) {
    return new Game(gameData.appid, gameData.playtime_forever);
  }

  static createGameList(gameListData: Array<SteamGame>) {
    return gameListData.map((gameData) => {
      return this.createGame(gameData);
    });
  }
}
