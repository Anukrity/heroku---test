var express=require('express');
var app=express();

app.use('/',function(req,res,next){
res.send('hello world by me');
});

app.listen(process.env.PORT || 5000,function(){
console.log('app listening on server port',port)
});