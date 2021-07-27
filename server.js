const express = require('express');
const app = express();
const http = require("http").Server(app);
const port = 3000;
const bodyParser = require("body-parser");

//access the access database
const ADODB = require('node-adodb');
const conn = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=networkAudit\\SQL_Schema\\DB - Access.mdb;');

//setup app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

//access HTML files
var engines = require("consolidate");
app.engine("html", engines.hogan);
app.set("views", __dirname + "/views");

app.get('/', (req, res) => {
    conn.query("SELECT * FROM Item WHERE IPage='Summary'").then(data => {
        res.render("index.html", {Report: data});
    }).catch(err => console.log(err))
})

const listener = http.listen(port, () => {
    console.log("Your app is listening on port " + port);
});