const express = require('express');
const router = express.Router();
const cron = require('node-cron');

let expenses = [];


router.post('/', (req, res) => {
    const { category, amount, date } = req.body;

    if (!category || category.trim() === "") {
        return res.status(400).json({ status: 'error', error: 'Category is required' });
    }
    if (amount <= 0) {
        return res.status(400).json({ status: 'error', error: 'Amount must be a positive number' });
    }

    const expense = { id: expenses.length + 1, category, amount, date };
    expenses.push(expense);
    res.status(201).json({ status: 'success', data: expense });
});


router.get('/', (req, res) => {
    const { category, startDate, endDate } = req.query;
    let filteredExpenses = [...expenses];

   
    if (category) {
        filteredExpenses = filteredExpenses.filter(exp => exp.category.toLowerCase() === category.toLowerCase());
    }

    if (startDate && endDate) {
        filteredExpenses = filteredExpenses.filter(exp => exp.date >= startDate && exp.date <= endDate);
    }

    res.json({ status: 'success', data: filteredExpenses });
});


router.get('/analysis', (req, res) => {
    const summary = expenses.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});
    
    res.json({ status: 'success', data: summary });
});


cron.schedule('*/1 * * * *', () => { 
    const dailySummary = expenses.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + curr.amount;
        return acc;
    }, {});
    
    console.log('Daily Summary:', dailySummary);
});

module.exports = router;
