const express = require('express');
const app = express()
const port = 3070
const routesUrls = require('./routes/routes')
const bodyParser = require('body-parser')
const cors = require('cors')    
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
  if (error) {return console.log(error)}
  else console.log("Database connected")
})

app.use(cors())


app.use(bodyParser.json());
app.use('/', routesUrls)




app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
