var express = require("express");

var app = express();

var data = [];

app.use(express.json());
app.use('/',(req, res, next) => {
    
    next();
});

app.get('/get/:lgin', (req, res) => {
    console.log("we have incoming!",req.url);
    //console.log("Trespassing....Lost");
    res.send(data[req.params.lgin]);
});

app.get('/', (req, res) => {
    console.log("Trespassing....Lost");
    res.send("Are You Lost?");
});




app.get('/home', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    
    res.send("You are home");
});
app.get('/home/all', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    
    res.send(data);
});
app.get('/home/:index', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    ;
    if (req.params.index>=0 && req.params.index<=data.length-1)
    {
        res.send(data[req.params.index]);
    }
    else
    {
        res.status(404).send("not found");
    }
    
});
app.post('/home/:home', (req, res) => {
    console.log("Trespassing.....");
    console.log("we have incoming!",req.url);
    data.push(req.params.home);
    //res.status(404);
    res.send(data);
});
app.put('/home/:index/:newinfo', (req, res) => {
    console.log("updating");
    console.log("we have incoming!",req.url);

    if (req.params.index>=0 && req.params.index<=data.length-1)
    {
        data[req.params.index] = req.params.newinfo;
        res.send("updated");
    }
    else
    {
        res.status(404).send("not found");
    }
    

    res.status(404);
    //res.send("You Are Trespassing");
});
app.delete('/home/:index', (req, res) => {
    console.log("deleting");
    console.log("we have incoming!",req.url);
    if (req.params.index>=0 && req.params.index<=data.length-1)
    {
        data.splice(+req.params.index,1);
        res.send("purged");
    }
    else
    {
        res.status(404).send("not found");
    }
    
    
    
});




app.listen(8080);