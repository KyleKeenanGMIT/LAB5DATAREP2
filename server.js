const express = require('express')
const app = express()
const port = 4000//will see example app is listening on port 4000 when running the code. - localhost:4000 in browser to view.
const path = require('path');//path is another libary

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//body parser installed using the cmd line npm install body-parser.

app.post('/name', (req, res) =>{
    res.send('Hello ' +req.body.fname);//post method.
})


app.get('/', (req, res) => {
  res.send('Welcome to Data Representation & Querying')
})



app.get('/hello/:name', (req, res) => {
    console.log(req.params.name);
res.send('hello '+ req.params.name);
})//localhost:4000/hello will show the res.send. - /:name adds the parameter.
//when running for the parameter you will type a name eg. localhost:4000/hello/kyle - returns hello kyle on the screen.

app.get('/test', (req,res) =>{
    res.sendFile(__dirname + '/index.html')//dirname will get me current directory and grab index.html from there. - returns data from the html file.
})



app.get('/name', (req,res) =>{
    res.send("Hello "+req.query.fname+" "+ req.query.lname) //http://localhost:4000/name?fname=kyle&lname=keenan url after pressing submit.
})

app.get('/api/books', (req, res) => {
    const data = [
        {
        "title": "Learn Git in a Month of Lunches",
        "isbn": "1617292419",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "status": "MEAP",
        "authors": ["Rick Umali"],
        "categories": []
        },
        {
        "title": "MongoDB in Action, Second Edition",
        "isbn": "1617291609",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "status": "MEAP",
        "authors": [
        "Kyle Banker",
        "Peter Bakkum",
        "Tim Hawkins",
        "Shaun Verch",
        "Douglas Garrett"
        ],
        "categories": []
        },
        {
        "title": "Getting MEAN with Mongo, Express, Angular, and Node",
        "isbn": "1617292036",
        "pageCount": 0,
        "thumbnailUrl":"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "status": "MEAP",
        "authors": ["Simon Holmes"],
        "categories": []
        }
        ];//array of data created.
    res.status(200).json({//200 means everything has happened sucessfully. - 500 = internal server error.
        myBooks:data,//new array called mybooks = data.
        "message": "Hello from the server"
    });//to run - localhost:4000/api/books. - shows the data from the res.json
}
)



app.get('/whatever', (req,res) => {
    res.send('Goodbye');
}) //- server listens for a request like whatever, sends a request and a response. - HTTP Request is sent, res.send('text') is returned.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})//express installed, express libary inclued and port defined.