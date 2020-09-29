import express from 'express';
import Steam from '../models/steam';

import { UserTransformer } from '../services/userTransformer';
import { GameTransformer } from '../services/gameTransformer';

const router = express.Router();

router.get('/:steamid', async (req, res, next) => {
  try {
    const steam = new Steam(req.params.steamid);
    const userData = await steam.getUserInfo();
    const gamesData = await steam.getUserGames();

    const user = UserTransformer.createUser(userData);
    const games = GameTransformer.createGameList(gamesData);

    user.games = games;
    user.calcTotalHours();

    res.json(user);
  } catch (err) {
    next(err);
  }
});

export default router;
