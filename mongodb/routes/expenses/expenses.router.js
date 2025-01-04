const { Router } = require('express');

const expenseRouter = Router();

const { getAllExpenses } = require('./expenses.service');

userRouter.get('/', getAllExpenses);

module.exports = expenseRouter;
