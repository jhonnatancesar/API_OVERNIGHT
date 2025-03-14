import { Router } from 'express';
import UnidadeController from '../controllers/userController'

// Index
const indexRoute = Router();
indexRoute.get('', async (req, res) => {
  res.json({ message: 'BEM VINDE, FILHA DA PUT@' });
});
indexRoute.use('/users', UnidadeController.getUsers);
export default indexRoute;