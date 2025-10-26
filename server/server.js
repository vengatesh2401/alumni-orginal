const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// calling env file
dotenv.config();

// calling express and initializing app
const app = express();
const PORT = process.env.PORT || 8050;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

// middlewares
app.use(cors());
app.use(express.json());

// calling database
connectDB();




