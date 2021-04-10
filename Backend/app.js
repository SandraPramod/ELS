const express = require('express');
const EmployeeData = require('./src/model/Employeedata');
const cors = require('cors');
var bodyparser = require('body-parser');
const jwt = require('jsonwebtoken')
var app = new express();
app.use(cors());
app.use(express.json());
username = 'admin';
password = '12345';


function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Unauthorized request')
  }
  let payload = jwt.verify(token, 'secretKey')
  if (!payload) {
    return res.status(401).send('Unauthorized request')
  }
  req.userId = payload.subject
  next()
}


// app.get('/newtest', function (req, res) {

//   var employee = {
//     empId: 102,
//     Name: "Test2",
//     Designation: "Test2",
//     Gender: "Test",
//     Address: "Test",
//     Age: 35,
//     Salary: 15000,
//     imageUrl: "Test",
//     loginStatus: "false",
//     logHistory: []
//   }
//   var employee = new EmployeeData(employee);
//   employee.save();
//   res.send("DOne");
// });

app.post('/insert', verifyToken, function (req, res) {

  console.log(req.body);

  var employee = {
    empId: req.body.employee.empId,
    Name: req.body.employee.Name,
    Designation: req.body.employee.Designation,
    Gender: req.body.employee.Gender,
    Address: req.body.employee.Address,
    Age: req.body.employee.Age,
    Salary: req.body.employee.Salary,
    imageUrl: req.body.employee.imageUrl,
  }
  var employee = new EmployeeData(employee);
  employee.save();
});
app.get('/employees', function (req, res) {

  EmployeeData.find()
    .then(function (employees) {
      res.send(employees);
    });
});
app.get('/:id', (req, res) => {

  const id = req.params.id;
  EmployeeData.findOne({ "_id": id })
    .then((employee) => {
      res.send(employee);
    });
});

app.post('/login', (req, res) => {
  let userData = req.body


  if (!username) {
    res.status(401).send('Invalid Username')
  } else
    if (password !== userData.password) {
      res.status(401).send('Invalid Password')
    } else {
      let payload = { subject: username + password }
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({ token })
    }

})

app.put('/update', (req, res) => {
  console.log(req.body)
  id = req.body._id,
    empId = req.body.empId,
    Name = req.body.Name,
    Designation = req.body.Designation,
    Gender = req.body.Gender,
    Address = req.body.Address,
    Age = req.body.Age,
    Salary = req.body.Salary,
    imageUrl = req.body.imageUrl
  EmployeeData.findByIdAndUpdate({ "_id": id },
    {
      $set: {
        "empId": empId,
        "Name": Name,
        "Designation": Designation,
        "Gender": Gender,
        "Address": Address,
        "Age": Age,
        "Salary": Salary,
        "imageUrl": imageUrl
      }
    })
    .then(function () {
      res.send();
    })
})

app.delete('/remove/:id', (req, res) => {

  id = req.params.id;
  EmployeeData.findByIdAndDelete({ "_id": id })
    .then(() => {
      console.log('success')
      res.send();
    })
})

app.post('/authemployee', function (req, res) {
  var empid = req.body.emp_id;
  var date = new Date();
  EmployeeData.find({ empId: empid }).then(data => {
    if (data[0]) {
      data[0].loginStatus = !data[0].loginStatus;
      if (data[0].loginStatus == true) {
        data[0].logHistory.push([String(date.toTimeString() + " " + date.toDateString())]);
        res.send({ "message": "success", "emp": data[0] });
        EmployeeData.findByIdAndUpdate({ _id: data[0]._id }, data[0], function (err, result) {
          if (err) console.log(err);
        });
      }

      else if (data[0].loginStatus == false) {
        data[0].logHistory[data[0].logHistory.length - 1].push(String(date.toTimeString() + " " + date.toDateString()));
        res.send({ "message": "success", "emp": data[0] });
        EmployeeData.findByIdAndUpdate({ _id: data[0]._id }, data[0], function (err, result) {
          if (err) console.log(err);
        });
      }
    }
    else {
      res.send({ "message": "failure" });
    }
  });
});

app.post('/getloghistory', (req, res) => {
  EmployeeData.find({ empId: req.body.id }).then(data => {
    res.send(data[0].logHistory);
  });
});



app.listen(3000, function () {
  console.log('listening to port 3000');
});

