import { User } from './user';

test('user calculates total played time in hours', () => {
  const user = new User('img', 'lizard', 10, 'url');
  user.games = [
    { appid: 1, playtime: 1000 },
    { appid: 2, playtime: 10000 },
    { appid: 3, playtime: 100000 },
  ];

  user.calcTotalHours();

  expect(user.totalHours).toBe(1850);
});
