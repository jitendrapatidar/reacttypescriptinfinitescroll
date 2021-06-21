const express =require('express');
const app =express();
const PORT=5000;
const mongoose =require('mongoose');
require('./modules/books');
const {MongoUrl} =require('./modules/keys');

   mongoose.connect(MongoUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});
   mongoose.connection.on('connected',()=>{
    console.log("connected to mongo");
  });
 
app.use(express.json());
app.use(require('./routes/auth'));

 app.get('/',(req,res)=>{

    res.send('Hello');
  });

app.listen(PORT,()=>{
    console.log("server is running on ", PORT);


});

















// const customMiddleware=(req,res,next)=>{
//     console.log("Middleware Executed!..");
//     next();
// }
// app.use(customMiddleware);

// app.get('/',(req,res)=>{
//     res.send('Hello');
// });

