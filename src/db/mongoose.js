const mongoose = require("mongoose");
const localDatabase = "mongodb://127.0.0.1:27017/testermovies";
const cloudDatabase = "mongodb+srv://andresns:1234@cluster0.nt43m.mongodb.net/testermovies?retryWrites=true&w=majority";

mongoose.connect(cloudDatabase,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then((db) => {console.log("Conectado a la base de datos.")}).catch((e)=>{
    console.log(e);
});