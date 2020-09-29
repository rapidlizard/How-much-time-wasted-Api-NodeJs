import axios, { AxiosResponse } from 'axios';

export interface SteamGame {
  appid: number;
  playtime_forever: number;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
}

export interface SteamPlayer {
  steamid: string;
  personaname: string;
  profileurl: string;
  avatarfull: string;
  timecreated: number;
  loccountrycode: string;
}

interface SteamUserResponsePayload {
  players: Array<SteamPlayer>;
}

interface SteamUserResponse {
  response: SteamUserResponsePayload;
}

interface SteamGamesResponsePayload {
  game_count: number;
  games: Array<SteamGame>;
}

interface SteamGamesResponse {
  response: SteamGamesResponsePayload;
}

class Steam {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  getUserInfo() {
    const url =
      'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=2FA14ED02A1D7CCC0E4FCA80AE6AE194&steamids=' +
      this.id;

    return axios.get<SteamUserResponse>(url).then((response) => {
      return response.data.response.players[0];
    });
  }

  getUserGames() {
    const url =
      'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=2FA14ED02A1D7CCC0E4FCA80AE6AE194&steamid=' +
      this.id;

    return axios.get<SteamGamesResponse>(url).then((response) => {
      return response.data.response.games;
    });
  }
}

export default Steam;
