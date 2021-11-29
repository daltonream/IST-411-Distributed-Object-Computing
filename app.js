const  express = require('express');
const app  = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Hello mofo")
});


app.get('/getdog', (req, res) =>{
    res.send("\nHeres a dog")
});

app.get('/getdog/:dogName', (req, res) =>{
    let dogName = req.params.dogName;
    res.send(`here is a dogName: ${dogName}`);
});

app.post('/', (req, res) =>{
    res.send("Hello from Post")
});

app.get('/getdog/:dogName/owner/:ownerName', (req, res) =>{
    let dogName = req.params.dogName;
    let ownerName = req.params.ownerName;
    res.send(`here is a Dog Name: ${dogName} here is a owner Name: ${ownerName}`);
});

app.listen(port, () => console.log(`Listening on port ${port}`))