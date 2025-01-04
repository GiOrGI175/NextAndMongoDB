const express = require('express');
const app = express();
const connectDb = require('./db/db');
const userRouter = require('./users/users.router');

app.use(express.json());

connectDb();

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3001, () => {
  console.log('runnig on: http://localhost:3001');
});
