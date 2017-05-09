var express=require('express');
var port=3030;
var app=express();

app.use('/',function(req,res,next){
res.send('hello world by me');
});

app.listen(port,function(){
console.log('app listening on server port',port)
});