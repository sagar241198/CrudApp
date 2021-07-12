const express = require('express');
const user = require('../Model/UserSchemaModel')
const UserRoutes = express.Router();

UserRoutes.post('/Resister', (req, res) => {
    const { name, email, number } = req.body
    const newUser = new user({ name, email, number });
    newUser.save((err, data) => {
        if (err) {
            res.status(400).json({ data: 'failed to resister' });
        } else {
            res.status(200).json({ data: 'resistration successful' });
        }
    })
})
UserRoutes.get('/user_data', (req, res) => {
    user.find().exec((err, data) => {
        if (err) {
            res.status(400).json({ data: "somethin wrong" });
        } else {
            res.status(200).json(data);
        }
    })
})

UserRoutes.put('/user_edited:id', (req, res) => {
   user.findOneAndUpdate({_id:req.params.id},{
       $set:{
           name:req.body.name,
           email:req.body.email,
           number:req.body.number
       }
   }).exec((err,data)=>{
       if(err){
        res.status(400).json("server error")
    }else{
        res.status(200).json({data:data});
    }
   })
})

UserRoutes.delete('/deleting:id', (req, res) => {
    console.log(req.params.id);
    user.findOneAndDelete({ _id: req.params.id }).exec((err, data) => {
        if (err) {
            res.status(400).json({ data: "somethin wrong" });
        } else {
            res.status(200).json(data);
        }
    })
})
module.exports = UserRoutes;
