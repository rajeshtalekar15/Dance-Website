const express = require("express"); //For using express framework
const path = require("path"); //For routing pages
//const fs = require("fs"); //TO read or write into file
const app = express(); // For including express functions into app
const port = 8000; //Server port

//Express stuffs
//app.use(express.static('static', options))
app.use('/static', express.static('static'));//For serving files as public
app.use(express.urlencoded())

//PUG Specific stuffs
app.set('view engine', 'pug')// Setting the template as PUG
app.set('views', path.join(__dirname,'views'))//Set the views directory

//Endpoints
app.get('/', (req,res)=>{ 
    const params= {}
    res.status(200).render('home.pug', params)
})

app.get('/contact', (req,res)=>{ 
    const params= {}
    res.status(200).render('contact.pug', params)
}) 
 

//Starts the server
app.listen(port, ()=>{
    console.log(`Success At Port number: ${port}`)
});
