const {json} = require('body-parser');
const express = require ('express');
const app = express();
const   UserRoutes = require( './UserRoutes/Useres')
require('./DataBase/connect');
const PORT = 8080;

app.use(json());
app.use(UserRoutes)


app.get("/",(req,res)=>{
    res.send('wlecome to node js tute');
});
app.listen(PORT,()=>{
    console.log(`server is running on port number ${PORT}`)
})
