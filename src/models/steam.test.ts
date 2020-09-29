import axios from 'axios';

import Steam from './steam';

import mockSteamUser from './mockdata/user.json';
import mockSteamUserGames from './mockdata/games.json';
import expectedUser from './expectedjsons/user.json';
import expectedUserGames from './expectedjsons/games.json';

jest.mock('axios');

// beforeAll(function () {
//   return (steam = new Steam('76561198066000502'));
// });

test('should have atribute id as string', () => {
  const steam = new Steam('76561198066000502');

  expect(steam.id).toBe('76561198066000502');
  expect(typeof steam.id).toBe('string');
});

test('should return user information', () => {
  const steam = new Steam('76561198066000502');
  const mockdata = { data: mockSteamUser };

  const getSpy = axios.get as jest.Mock<any, any>;
  getSpy.mockResolvedValue(mockdata);

  return steam.getUserInfo().then(function (data) {
    expect(data).toEqual(expectedUser);
  });
});

test('should return user games list', () => {
  const steam = new Steam('76561198066000502');
  const mockdata = { data: mockSteamUserGames };

  const getSpy = axios.get as jest.Mock<any, any>;
  getSpy.mockResolvedValue(mockdata);

  return steam.getUserGames().then(function (data) {
    expect(data).toEqual(expectedUserGames);
  });
});
