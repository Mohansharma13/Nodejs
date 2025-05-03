const express=require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h2>this is home route</h2>')
});

app.get('/about',(req,res)=>{
    res.send(req.query.name);
});
app.get('/help',(req,res)=>{
    res.send({name:'mohan',
        class: "1st"
    })
})

app.listen(8000);