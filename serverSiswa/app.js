// app.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user-routes');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/students', userRouter);

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}/api/students`);
});