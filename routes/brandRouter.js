import Router from 'express';
import BrandController from '../controllers/BrandController.js';
const router = new Router();

router.get('/', BrandController.getAll)
router.post('/', BrandController.create)

export default router;