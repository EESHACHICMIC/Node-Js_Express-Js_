const express = require('express')
const app = express();
var bodyParser = require('body-parser') //it is neccessary to import when we will read data from body
app.use(express.json());
const port = 5000;
const employee = require('./employee');
const emp = require('./employee');
app.get('/', (req, res) => {
    res.send({ 'message': 'Api is working..' })
})

//GET Request for display all json data 
app.get('/api/emp', (req, res) => {
    res.send(employee);
})

//GET request with query params for searching a particular record based on id
app.get('/api/emp/search', (req, res) => {
    console.log(req.query.id);
    let index = employee.findIndex(x => x.emp_id == parseInt(req.query.id))
    console.log("Index:", index);

    index >= 0 ? res.send(employee[index]) : res.send("Record Not Found..")

})

//POST request for inserting new records into the json object
app.post('/api/emp', (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    console.log(first_name, last_name, email);

    let newEmp = {
        emp_id: employee.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    employee.push(newEmp);
    res.json(newEmp)

})

//DELETE request for deletiing particular data from the array of obejct 
app.delete('/api/emp/:id', (req, res) => {
    let index = employee.findIndex(x => x.emp_id == Number.parseInt(req.params.id))
    console.log(index);
    index >= 0 ? removedRecord = employee.splice(index, 1) : res.send("Record Not Found !!")
    if (index >= 0) { res.send(removedRecord) }
})


//PUT request for updating the existing record into the array of object
app.put('/api/emp/:id', (req, res) => {
    let id = req.params.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;

    const index = employee.findIndex(x => x.emp_id == Number.parseInt(req.params.id))
    console.log("index:-->", index);

    if (index >= 0) {
        const emp = employee[index];
        emp.first_name = first_name;
        emp.last_name = last_name;
        emp.email = email
        res.json(emp);
    }
    else {
        res.status(404)
    }
})

//PATCH request is used for updating the record into the json...
app.patch('/api/emp/find/:id', (req, res) => {
    let id = req.params.id;
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;

    const index = employee.findIndex(x => x.emp_id == Number.parseInt(req.params.id))
    console.log("index:-->", index);

    if (index >= 0) {
        const emp = employee[index];
        emp.first_name = first_name;
        emp.last_name = last_name;
        emp.email = email
        res.json(emp);
    }
    else {
        res.status(404)
    }
})

app.listen(port, () => console.log(`Server is runnning at port ${port}`))