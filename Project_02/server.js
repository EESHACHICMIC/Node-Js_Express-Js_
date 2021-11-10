const express = require('express')
const port = 5000;
const bodyParser = require('body-parser')
const app = express();
app.use(express.json())

const fs = require('fs')

fs.writeFileSync('abc.txt', "my name is md eesha")
fs.appendFileSync('abc.txt', "This is project2 which is basically related to file system.")

app.get("/", (req, res) => {
    res.json({ 'message': "Project2's Api is working.." })
})

app.listen(port, () => console.log(`Server is running at ${port}`))