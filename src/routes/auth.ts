import { Router } from 'express';
import { validateAuthRequestBody } from '../lib/middlewares/auth'
const router = Router();

router.use(validateAuthRequestBody)

router.post('/login', (req, res) => {
    res.send("Login");
});

router.post('/signup', (req, res) => {
    res.send("Signup");
});

export default router;