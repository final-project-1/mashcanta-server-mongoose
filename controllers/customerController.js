const customer = require('../models/customer');
const jwt = require('jsonwebtoken');

const singUp= async(req, res)=>{

    let myCustomer = new customer(req.body);
    console.log("my customer" + myCustomer);

    try{
        let token = jwt.sign({email:req.body.email, password: req.body.password}, process.env.SECRET);
        console.log(token);
        await myCustomer.save();
        res.status(200).json({newCustomer : myCustomer, token : token});
    }
    catch{
        res.status(500).json({err: error.massege});
    }
    
}

module.exports = {singUp}