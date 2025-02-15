const express = require('express')
const app = express();

app.use(function(req,res,next){ 
    console.log("lets goo middleware");                    //firstly this works then the get function
    next();
    
});
// app.get(route , requestHandler)

app.get("/", function(req,res){
    res.send("i'm using express");
})

app.get("/profile", function(req,res){
    return next(new Error("something wrong"));            //shows on console
})


app.use((err,req,res,next)=>{ 
    console.error(err.stack);
    res.status(500).send('somthing broke!');               // shows on frontend
}); 


app.listen(3000);