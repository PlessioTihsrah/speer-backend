import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send("Search");
});

export default router;