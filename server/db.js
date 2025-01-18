require('dotenv').config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);

const todosSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model('todos', todosSchema);

module.exports = {
    todo
};
