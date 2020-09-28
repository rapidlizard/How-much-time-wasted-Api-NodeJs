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

interface SteamResponsePayload {
  players: Array<SteamPlayer>;
}

interface SteamResponse {
  response: SteamResponsePayload;
}

class Steam {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  getInfo() {
    const url =
      'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=2FA14ED02A1D7CCC0E4FCA80AE6AE194&steamids=' +
      this.id;

    return axios.get<SteamResponse>(url).then((response) => {
      return response.data.response.players[0];
    });
  }
}

export default Steam;
