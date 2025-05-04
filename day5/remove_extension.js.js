const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname);
console.log(publicPath)
app.get('/*', (_, res) => {
    res.sendFile(path.join(publicPath, '404.html'));
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});