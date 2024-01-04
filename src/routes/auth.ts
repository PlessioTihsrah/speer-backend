import { Router } from 'express';
import { validateAuthRequestBody } from '../lib/middlewares/auth'
import User from '../lib/models/User';
const router = Router();

router.use(validateAuthRequestBody)

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (User.validate(email, password)) {
        return res.json({ user: User.findByEmail(email), token: 'random token' });
    }
    return res.status(403).json({ "error": "Invalid credentials" })
});

router.post('/signup', (req, res) => {
    const { email, password } = req.body;
    if (User.exists(email)) {
        return res.status(400).json({ "error": `User with email ${email} already exists` })
    }
    const user = User.create(email, password);
    return res.json({ user, token: 'random token' })
});

export default router;