import { UserTransformer } from './userTransformer';

import userData from './expected/user.json';
import expectedUser from './return/user.json';

test('should return user instance', () => {
  const result = UserTransformer.createUser(userData);
  expect(result).toEqual(expectedUser);
});
