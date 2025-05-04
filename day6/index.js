const express = require('express');
const path = require('path');

const app = express();
const publicpath = path.join(__dirname, 'public');

app.set('view engine', 'ejs'); // Set EJS as the view engine


app.get("/about", (req, res) => {
    res.sendFile(`${publicpath}/about.html`);
});

app.get("/profile", (req, res) => {
    const user={
        name:'example name',
        email:'example@mail.com',
        city:'exmaple city',
        skills:['php','js','c++']
    }
    res.render('profile',{user}); 
});

app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");
});
