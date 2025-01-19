require("dotenv").config();

const express = require("express");
const cors = require('cors')

require('./connection')

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
}))

const PORT_AUTH = process.env.PORT_AUTH;

const userAuthRoutes = require('./authRoutes/auth')
app.use('/', userAuthRoutes)

app.listen(PORT_AUTH, () => {
  console.log(`Server is running at port ${PORT_AUTH}`);
});