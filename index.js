const express=require('express');
const app=express();
const port=process.env.PORT || 8000;
const path=require('path');

app.use(express.static(path.join(__dirname,'static')));

app.get('/',(req,res)=>{
    res.sendFile('index.html');
})

app.listen(port,()=>{
    console.log('server listening at port ',port);
})