import { UserTransformer } from './userTransformer';

import userData from './input/user.json';
import expectedUser from './expected/user.json';

test('should return user instance', () => {
  const result = UserTransformer.createUser(userData);
  expect(result).toEqual(expectedUser);
});
