const express = require('express')
const app = express()
app.use(express.static('public'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

app.get('/ProjectLTW2', (req, res) => {
    res.sendfile('index.html')
})

app.get('/ProjectLTW2', (req, res) => {
    res.send(arr);
    res.end();
})

app.post('/ProjectLTW2', (req, res) => {
    arr.push(req.body.newNumber)
    res.send(arr)
    res.end();
})

app.put('/ProjectLTW2', (req, res) => {
    arr[req.query['id']] = req.query['newNumber'];
    res.send(arr);
    res.end()
})

app.delete('/ProjectLTW2', (req, res) => {
    arr.splice(req.query['id'], 1);
    res.send(arr)
    res.end()
})

app.listen(3000, () => {
    console.log("Server is running")
})
