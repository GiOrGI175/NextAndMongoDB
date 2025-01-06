const express = require('express');
const app = express();
const connectDb = require('./db/db');
const userRouter = require('./routes/users/users.router');
const expenseRouter = require('./routes/expenses/expenses.router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

connectDb();

app.use('/users', userRouter);

app.use('/expenses', expenseRouter);

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3001, () => {
  console.log('runnig on: http://localhost:3001');
});
