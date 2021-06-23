// const image = require('../models/image');
// const jwt = require('jsonwebtoken');

// const createImage= async(req,res)=>{
//     let newImage = new image(req.body);
//     console.log("new image", newImage);

//     try{
//         let token = jwt.sign({name:req.body.name, price:req.body.price ,width:req.body.width},
//             process.env.SELECT);
//         console.log("imageToken------", token);
//         await newImage.save();
//         res.status(200).json({newImage:newImage,token:token});
//     }
//     catch{
//         res.status(500).json({err:error.message});
//     }

// }

// const getImageByName=()=>{

// }

// const getImageById=()=>{

// }

// const getAllImage=()=>{

// }

// module.exports= {createImage,getImageByName,getImageById,getAllImage}