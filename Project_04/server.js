const express = require('express')
const app = express();
const mongoose = require('mongoose');
const body_parser = require('body-parser')
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/StudentDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successful"))
    .catch((err) => console.log(err));

const port = 5000;

app.get('/', (req, res) => {
    res.json({ 'message': 'APP is working...' })
})



// A mongoose schema is define the structure of the object....
//default value, validator etc..


const stuListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    class: String,
    college: {
        type: String,
        default: "LPU"
    },
    marks: Number,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }

})


const StudentList = new mongoose.model("StudentList", stuListSchema);

app.post('/api/student', (req, res) => {
    const stuData = {
        name: req.body.name,
        class: req.body.class,
        college: req.body.college,
        marks: req.body.marks,
        active: req.body.active
    }
    console.log(stuData);
    const stu = new StudentList(stuData);
    stu.save();
    res.json(stuData);
})

//create document

// const stu = new StudentList({
//     name: "Alok Raj",
//     class: "MCA",
//     college: "LPU",
//     marks: 320,
//     active: true,

// })





app.get('/api/student', (req, res) => {
    // res.json(stu)
})


app.listen(port, () => console.log(`Server is running on port ${port}`))