import express from 'express';
import Steam from '../models/steam';
import { UserTransformer } from '../services/userTransformer';

const router = express.Router();

router.get('/:steamid', (req, res, next) => {
  const steam = new Steam(req.params.steamid);
  steam.getInfo().then((userData) => {
    const user = UserTransformer.createUser(userData);
    res.json(user);
  });
});

export default router;
