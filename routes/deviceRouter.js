import Router from 'express';
import DeviceController from '../controllers/DeviceController.js';
const router = new Router();

router.get('/', DeviceController.getAll)
router.get('/count', DeviceController.getCount)
router.get('/:id', DeviceController.getOne)
router.post('/', DeviceController.create)

export default router;