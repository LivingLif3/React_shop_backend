import Router from 'express';
import checkRole from '../middlewares/checkRoleMiddleware.js';
import TypeController from '../controllers/TypeController.js';
const router = new Router();

router.get('/', TypeController.getAll)
router.post('/', checkRole('ADMIN'), TypeController.create)

export default router;