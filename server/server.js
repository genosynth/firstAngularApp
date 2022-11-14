const express = require('express');
const app = express()
const port = 3070
const bodyParser = require('body-parser')
const cors = require('cors')    
    

app.use(cors())
const users = [];

app.use(bodyParser.json());


app.get('/api/users', (req, res) => {
  res.json(users);
});


app.post('/api/login', (req,res)=>{
  const user = {
    username: req.body.username,   
    password: req.body.password
  }
//console.log(user)
let msg = "Incorrect Credentials"
  users.forEach((el)=>{
    if (el.username==user.username){
      return msg=`Welcome ${el.username}`
     
    }  
  })

  res.json(msg)
})

app.post('/api/register', (req, res)=>{
 
  const user = {
    username: req.body.username,
    email:req.body.email,
    password: req.body.password,
  }

  

  if (user.username && user.email && user.password){
    users.push(user)
    res.json("New user added.")
  }

  else ( res.json("Please enter all information."))
  
})

app.get('/', (req,res) => {
  res.send("Hello")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
