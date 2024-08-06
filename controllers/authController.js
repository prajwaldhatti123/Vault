const authService = require("../services/Auth/authService")
const bcrypt = require('bcrypt');

const verifyUser = (req , res) =>{
    let { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send('Email and password are required');
    }
    console.log(email,password);
    authService.getAdmin(email)
    .then((data)=>{
        if(!data) res.status(404).send("Invalid Email_ID");
        else return bcrypt.compare(password , data.password);
    })
    .then((result)=>{
        if(!result) return res.status(401).send('Invalid credentials');
        else  return res.status(200).send('Successfully LoggedIn !...');
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send("Internal server error occurred");
    })
}

const addUser = (req , res)=>{
    let user = req.body;
    authService.createUser(user)
    .then((id)=>{
       if(id) res.status(200).send(`Successfully added new user , insert _id : ${id}`);
       else res.status(200).send("check whether any field is missing!..");
    })
    .catch((err)=>{
        res.status(500).send({"Err" : err});
    })
}

module.exports = {verifyUser,addUser}
