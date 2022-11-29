const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs");
const userReg = require("../models/dbService");
const { response } = require('express');
const jwt = require("jsonwebtoken")


router.get('/', (req,res) => {
    res.send("Hello")
  });
  
  
router.get('/api/users', async(req,res)=>{
    const users = await userReg.find({});
    //const usernames = users.map(el => el.username); THIS WAS USED TO JUST SEND USERNAMES ONLY
    res.json(users)
})

router.post('/api/delete', async(req,res)=>{
    let username = req.body.username
  
    const userToDelete = await userReg.findOneAndDelete({username})
    //console.log(userToDelete)
    res.json("Account has been deleted successfully. You will now be logged out.")
    
})

router.post('/login', async(req, res) => {

    if (req.body.username==null || req.body.password==null){
        return res.json("Incorrect Credentials")
    }
    //response.send('send')
   const user = await userReg.findOne({
       username: req.body.username, 
       //password: request.body.password {THIS IS COMMENTED AS PASSWORD IS BEING CHECKED BY HASHING AFTER THIS LINE}
    })

    if(user && await bcrypt.compare(req.body.password, user.password)){

        const token = jwt.sign({
            username:user.username,
            email:user.email
        }, 'secretqwerty')
        console.log(user)
        return res.json(token)
    } else {return res.json("Incorrect Credentials")}

})

router.post('/api/register', async(req, res)=>{
  
   
    const userInfo = {
      username: req.body.username,
      email:req.body.email,
      password: req.body.password
    }
      
  
    if (userInfo.username && userInfo.email && userInfo.password){

        let hashedPassword = await bcrypt.hash(req.body.password, 8);
        userInfo.password = hashedPassword

        const user = new userReg(userInfo)
    
        user.save()
        .then (data => {
            console.log(data)
            res.json("User registered.")
            
        })
        .catch (error => {
            res.json("error")
         
        })  
 
    }
  
    else ( res.json("Please enter all information."))
    
  })
  



module.exports = router