import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express();

app.get('/', (req, res) => {
    res.send('This is backend')
})

app.use('/api/products', productRoutes)
app.use(notFound)
app.use(errorHandler)
const PORT = process.env.PORT || 5000
app.listen(5000, console.log(`Started Server at ${PORT}`));