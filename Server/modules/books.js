const mongoose =require('mongoose');

const bookSchema= new mongoose.Schema({

    title:{
        type:String,
        required:true
      },
    isbn:{
        type:String,
        required:true
      },
    pageCount:{
        type:Number,
        required:true
      },
    publishedDate:{
        type:Date,
         
      },
    thumbnailUrl:{
        type:String,
       
      },
    shortDescription:{
        type:String,
      
      },
    longDescription:{
        type:String,
         
      },
    status:{
        type:String,
        
      },
    authors:{
        type:Array,
        
      },
    categories:{
        type:Array,
        
      } 

});

//var bookCollection= 
mongoose.model("Book",bookSchema);
// module.exports= 
