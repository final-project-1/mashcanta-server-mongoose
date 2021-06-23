const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mogoose = require('mongoose')
const env = require('dotenv');
const jwt = require('jsonwebtoken')
const customerRouter = require('./routs/apiCustomer');

env.config();
app.use(express.json());
//app.use(bodyParser.json());

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

mogoose.connect(process.env.DB_CONNECT,connectionParams)
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log("error:" +err);
})

app.use('/customer',customerRouter);

app.listen(3003, (req, res) => {
    console.log("listen...... 3003");
})

// const func=()=>{
//     //make token
//     let token = jwt.sign({name: "Ayala", password: "fhgh"},process.env.SECRET)
//     console.log("token.........." + token);

//     //verifies token
//     let decoded = jwt.verify(token, process.env.SECRET) ;
//     console.log("verify....." + decoded);
// }
//func();



