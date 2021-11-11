const express = require('express')
const app = express();
const body_parser = require('body-parser')
app.use(express.json())
const port = 5000;
//const employee = require('./employee')
const fs = require("fs");
const { resolve } = require('dns');
const { Console } = require('console');
let data = JSON.parse(fs.readFileSync('./employee.json'))
app.get('/', (req, res) => {
    res.json({ 'message': 'API is working...', data: data })
})

// app.get('/api/emp', (req, res) => {
//     res.send(employee);
// })


app.post('/api/emp', (req, res) => {

    let newEmp = {
        emp_id: data.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    console.log(newEmp)
    data.push(newEmp)
    fs.writeFileSync('./employee.json', JSON.stringify(data))
    res.status(201).json({ status: 201, message: "Successful", data: newEmp })

})

app.listen(port, () => { console.log(`Server is running at ${port}`) })