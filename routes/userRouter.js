import Router from 'express';
const router = new Router();
import UserController from "../controllers/UserController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

router.post('/registration', UserController.registration)
router.post('/login', UserController.login)
router.get('/auth', authMiddleware, UserController.check)

export default router;