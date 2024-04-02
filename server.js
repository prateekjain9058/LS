const express=require('express');
const app = express();
const mongoose=require('mongoose')
const {MongoClient}=require('mongodb');
app.use(express.json());
const bodyparser=require('body-parser')
const cors=require('cors')

app.use(bodyparser.json());
app.use(cors());


const uri='mongodb+srv://prateekjain550:s1ZyLXOPEoKBh7mR@cluster0.a8vtszt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbname=SignUp';
const client = new MongoClient(uri);

const ProductSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
const product=mongoose.model('Logins',ProductSchema);

    client.connect()
    .then(()=>console.log("db connected"))
    .then((e)=>console.log(e));


app.post('/users',async(req,res)=>{
    try {
        const database= client.db('SignUp');
        const collection=database.collection('Logins');
        

        const newdata=req.body;
        const result=await collection.insertOne(newdata);
        res.status(200).json({message:'data post sucessfully'});
        console.log('post')

    } catch (error) {
        console.log(error);
        res.status(500).json({error:'internal error'})
    }
})
app.get('/user',async)

const start=()=>{
    try {
        app.listen(5000,()=>{
            console.log("server started");
        })
    } catch (error) {
        console.log(error);

    }
};
start();
