import { SteamPlayer } from '../models/steam';
import { User } from '../models/user';

export class UserTransformer {
  static createUser(userData: SteamPlayer) {
    return new User(userData.avatarfull, userData.personaname, userData.timecreated, userData.profileurl);
  }
}
