import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready!'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));