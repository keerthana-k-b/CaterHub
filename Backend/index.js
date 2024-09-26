import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/connectDB.js';
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.get('/', (req,res) => {
    res.send('Hai Keerthana. how r u.');
});
app.listen(3000, () => console.log('Example app is listening on port 3000. '));