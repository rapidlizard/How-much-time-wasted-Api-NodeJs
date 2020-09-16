const request = require('supertest');
import axios from 'axios';

import app from '../app';

import expectedUser from './expected/user.json';
import mockSteamUser from './input/user.json';

jest.mock('axios');

test('should return user', () => {
  const mockdata = { data: mockSteamUser };

  const getSpy = axios.get as jest.Mock<any, any>;
  getSpy.mockResolvedValue(mockdata);
  return request(app)
    .get('/76561198066000502')
    .then((response: any) => {
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expectedUser);
    });
});

// test('should resolve', async () => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('foo'), 1000);
//   });

//   const response = await promise;

//   expect(response).toEqual('foo');
// });

// test('should reject', async () => {
//   //    jest.expextASsertincout(1)

//   const promise = new Promise((resolve, reject) => {
//     // setTimeout(() => reject(new Error('unexpexcef hdsrfgjh')), 1000);
//     resolve();
//   });

//   try {
//     await promise;
//     throw new Error('did not throw');
//   } catch (err) {
//     expect(err.message).toContain('unexp');
//   }
// });
