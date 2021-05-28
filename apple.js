const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;

//Express stuffs
app.use('/static', express.static('static'));//For serving files as public
app.use(express.urlencoded())

//PUG Specific stuffs
app.set('view engine', 'pug')// Setting the template as PUG
app.set('views', path.join(__dirname,'views'))//Set the views directory


//Endpoints
app.get('/', (req,res)=>{ 
    const con = "This is best"
    const params= {'title': 'Pubg is the best game', "content": "con"}
   

    res.status(200).render('index.pug', params)
})
 
 app.post('/',(req,res)=>{
    
    name = req.body.name
    age= req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    
    let outputToWrite = `Name: ${name}, Age: ${age}, Address: ${address}, More: ${more}`;
    fs.writeFileSync('output.text', outputToWrite )
    const params= {'message': 'Form submitted'}
    res.status(200).render('index.pug', params)

 })

 
//Starts the server
app.listen(port, ()=>{
    console.log(`Success At Port number: ${port}`)
});
