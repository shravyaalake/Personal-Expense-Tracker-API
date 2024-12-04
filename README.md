# Expense Tracker API

A simple Expense Tracker API built with Node.js and Express. This application allows users to manage their expenses, analyze spending by category, and generate daily summaries.

## Features

- Add expenses with category, amount, and date.
- Retrieve all expenses with optional filtering by category and date range.
- Analyze spending by category.
- Generate daily summaries of expenses using cron jobs.

## Technologies Used

- Node.js
- Express
- CORS for handling cross-origin requests
- Body-parser for parsing JSON request bodies
- Node-cron for scheduling tasks

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker

2. install required dependencies
     ```bash
     npm install
The npm install command reads the package.json file in your project directory and installs all listed dependencies into the node_modules folder. This step is crucial for ensuring that all required libraries and frameworks are available for your application to function correctly.

3. **Run the application:**

   Start the server using the following command:

   ```bash
   node server.js
The server will run on http://localhost:3000

API Endpoints
1. Add Expense
POST /expenses This endpoint allows you to add a new expense.

Request Body:

         json
         {
           "category": "Transportation",
           "amount": 20,
           "date": "2024-12-03"
         }

Response:

      json
      {
        "status": "success",
        "data": {
          "id": 1,
          "category": "Transportation",
          "amount": 20,
          "date": "2024-12-03"
        }
      }

2. Get Expenses
   
GET /expenses This endpoint retrieves all logged expenses with optional filtering.

Response:

      json
      {
        "status": "success",
        "data": [
            {
            "id": 1,
            "category": "Transportation",
            "amount": 20,
            "date": "2024-12-03"
          },
          ...
        ]
      }

3. Analyze Spending

GET /expenses/analysis This endpoint analyzes spending by category and returns totals. 

Response:

         json
         {
           "status": "success",
           "data": {
             "Transportation": totalAmount1,
             "Groceries": totalAmount2,
             ...
           }
         }


## Troubleshooting

If you encounter any issues while setting up or running, consider the following troubleshooting tips:

- **Server Not Starting**: Ensure that you have installed all the required dependencies. Run `npm install` to install any missing packages.
- **Port Already in Use**: If you receive an error indicating that the port is already in use, you can either stop the process using that port or change the port number in your `.env` file.
- **API Errors**: If you encounter errors when making API requests, check the request format and ensure that you are sending the correct headers and body as specified in the API documentation.

If you continue to experience issues, feel free to reach out for support or consult the community forums for additional help.

