import express, { Express } from "express";
import notesRoutes from './routes/notes';
import searchRoutes from './routes/search';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api/notes', notesRoutes);
app.use('/api/search', searchRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});