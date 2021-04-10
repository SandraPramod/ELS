const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://elsone:elsone@cluster0.1edpo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var NewEmployeeSchema = new Schema({
    empId: Number,
    Name: String,
    Designation: String,
    Gender: String,
    Address: String,
    Age: Number,
    Salary: Number,
    imageUrl: String,
    loginStatus: Boolean,
    logHistory: Array
});

var Employeedata = mongoose.model('employee', NewEmployeeSchema);

module.exports = Employeedata;