const monggose = require('mongoose');

const connect = monggose.connect('mongodb://localhost:27017/CurdApp',
{ useNewUrlParser: true,
useUnifiedTopology: true 
} 
).then(()=>{
    console.log("database is conneceted")
}).catch((err)=>{
    console.log("database is not conneceted")
});