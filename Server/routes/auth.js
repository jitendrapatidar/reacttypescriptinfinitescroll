const express =require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Book = mongoose.model("Book");


 

router.get('/AllBook',(req,res)=>{
             
    var BookDetails=Book.find();

    BookDetails.exec(function(err,data)
    {
        if(err) throw err;
         //console.log(JSON.stringify(data));
         //res.render('index', { title: 'Employee Records',records:data });
         res.json({message:"book detail info",
         records:data 
        });
      });

});

router.get('/bookBy/:page/:size',(req,res)=>{
    console.log(req.query);
    var pageNo =  parseInt( req.params.page);
     var size = parseInt(req.params.size)
     var query = {}
     if(pageNo < 0 || pageNo === 0) 
     {
           response = {"error" : true,"message" : "invalid page number, should start with 1"};
           return res.json(response)
     }
     query.skip = size * (pageNo - 1);
     query.limit = size;
     
     Book.count({},function(err,totalCount) 
     {

                           if(err) {
                              response = {"error" : true,"message" : "Error fetching data"}
                            }
                            Book.find({},{},query,function(err,data) {

                                if(err) { 
                                    response = {"error" : true,"message" : "Error fetching data"};
                                     } 
                                     else
                                      {
                                         var totalPages = Math.ceil(totalCount / size)
                                        response = {"error" : false,"message" : data,"pages": totalPages};
                                      }
                                       res.json(response);

                            });//book find close
     });//book count 
     

});

router.get('/books',(req,res)=>{
  console.log(req.query);
   var pageNo = parseInt(req.query.pageNo)
   var size = parseInt(req.query.size)
   var query = {}
   if(pageNo < 0 || pageNo === 0) 
   {
         response = {"error" : true,"message" : "invalid page number, should start with 1"};
         return res.json(response)
   }
   query.skip = size * (pageNo - 1);
   query.limit = size;
   
   Book.count({},function(err,totalCount) 
   {

                         if(err) {
                            response = {"error" : true,"message" : "Error fetching data"}
                          }
                          Book.find({},{},query,function(err,data) {

                              if(err) { 
                                  response = {"error" : true,"message" : "Error fetching data"};
                                   } 
                                   else
                                    {
                                       var totalPages = Math.ceil(totalCount / size)
                                      response = {"error" : false,"message" : data,"pages": totalPages};
                                    }
                                     res.json(response);

                          });//book find close
   });//book count 
   

});

router.get('/book/:page',(req,res)=>{

    var page = parseInt( req.params.page);
    const PAGE_SIZE = 20;   
    const skip = (page - 1) * PAGE_SIZE;
  if(page!=0)
    {
         var BookDetails= Book.find({})  
        .skip(skip)                 
        .limit(PAGE_SIZE);

        res.json({message:"book detail",
            records:BookDetails 
            });
    }
    else{
        res.json({message:"No Record found",
        records:'' 
       });

    }
    // Same as before, always use 'skip' first
});
 

module.exports = router;





























// router.get('/books',(req,res) => {

// });


// router.get('/books',(req,res) => {

//     console.log(req.query);
//     var pageNo = parseInt(req.query.pageNo)
//     var size = parseInt(req.query.size)
//     var query = {}
//     if(pageNo < 0 || pageNo === 0) 
//     {
//           response = {"error" : true,"message" : "invalid page number, should start with 1"};
//           return res.json(response)
//     }
//     query.skip = size * (pageNo - 1);
//     query.limit = size;
//     // Find some documents
//     Book.count({},function(err,totalCount) 
//     {
//                if(err) {
//                  response = {"error" : true,"message" : "Error fetching data"}
//                }
//                Book.find({},{},query,function(err,data) {
//                 // Mongo command to fetch all data from collection.
//               if(err) {
//                   response = {"error" : true,"message" : "Error fetching data"};
//               } else {
//                   var totalPages = Math.ceil(totalCount / size)
//                   response = {"error" : false,"message" : data,"pages": totalPages};
//               }
//               res.json(response);
//            });
//     });

//   });

// router.get('/Book/:limit/:skip',(req,res)=>{
//         //limit = 0, skip = 0   
//     const limit = parseInt(req.params.limit); // Make sure to parse the limit to number
//     const skip = parseInt(req.params.skip);// Make sure to parse the skip to number
//     //console.log(limit);
//     //console.log(skip);
//     //res.send("hello users id ");
//     console.log(req.params);
//     //res.send("hello users id " + req.params.id  + 'skip ' + + req.params.skip);
//    // res.send("hello users id " + req.params.skip);
//     var BookDetails=Book.find().skip(skip).limit(limit);
//     BookDetails.exec(function(err,data)
//     {
//         if(err) throw err;
//          //console.log(JSON.stringify(data));
//          res.json({message:"All book detail info",
//          records:data 
//         });
//         res.json({message:"All book detail info"});

  
//     });


// });


 