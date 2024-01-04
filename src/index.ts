import express, { Express } from "express";
import dotenv from 'dotenv';

import authRoutes from './routes/auth'
import notesRoutes from './routes/notes';
import searchRoutes from './routes/search';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/search', searchRoutes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});