const express = require('express')
const app = express();
const fs = require('fs')
const port = 5000;
const body_parser = require('body-parser')
app.use(express.json())

const student = require('./student.json');
const data = JSON.parse(fs.readFileSync('./student.json', "utf8"))

app.get('/', (req, res) => {
    res.json(student)
    console.log(student.length)
})
app.post('/student', (req, res) => {
    const stu = {
        id: student.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    // console.log(stu);
    student.push(stu)
    data.push(stu)
    fs.writeFileSync('./student.json', JSON.stringify(data))
    res.json(stu);
    console.log(data);
})

app.listen(port, (req, res) => {
    console.log(`Server is running at port: ${port}`)
})
