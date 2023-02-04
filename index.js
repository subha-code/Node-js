var mysql = require('mysql');
var express = require('express');
var app = express();
var config = require('./dbConfig.js');
const res = require('express/lib/response');
const req = require('express/lib/request.js');
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "jade");
app.get('/', function(req, res) {
    res.sendFile("index.html", { root: __dirname });

});
app.get('/viewJade', (req, res) => {
    res.render("sample");
})
app.post('/postreq', (req, res) => {
    var name = req.body.n1;
    var password = req.body.p1;
    res.send("<b" + name + "," + password + "</b>");
});
app.listen(5000, () =>
    console.log('server listening to port'));