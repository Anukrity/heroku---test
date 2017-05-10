var express=require('express');
var app=express();
var port=5000;
app.use('/',function(req,res,next){
res.send('hello world by me');
});

app.listen(process.env.PORT || port,function(){
console.log('app listening on server port',port)
});