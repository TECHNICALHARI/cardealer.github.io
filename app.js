const express=require('express');
const ejs=require('ejs');
const path=require('path');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/carContact',{useNewUrlParser:true,useUnifiedTopology: true });
const carSchema=new mongoose.Schema({
    username:String,
    number:Number,
    email:String,
    message:String,
});
const contact=mongoose.model('contact',carSchema);
app.use('/',express.static(path.join(__dirname,'static')));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/',(req,res)=>{
    console.log(req.body);
    let myData=new contact(req.body);
    myData.save().then(()=>{
        res.send('The data has been saved to the data base')
    }).catch(()=>{
        res.send('Something is wrong');
    });
});
app.listen(3000,()=>{
    console.log('The server is running on port 3000:');
});