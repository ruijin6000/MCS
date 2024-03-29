"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require('body-parser');
// const adminRoutes = require('./routes/admin')
// const submit_all_expenses = require('./routes/submit_all_expenses')
// const review_expense = require('./routes/review_expenses')
// const update_expense =require('./routes/update_expense')
const app = (0, express_1.default)();
const port = 6000;
app.use(express_1.default.json());
// Middleware
//app.use(bodyParser.json());
// app.use(adminRoutes);
// app.use(submit_all_expenses);
// app.use(review_expense);
// app.use(update_expense);
//Start the server
// app.listen(5000).on('error', function(err) { console.error(err) });
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
