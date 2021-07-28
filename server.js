const express = require('express');
const app = express();
const http = require("http").Server(app);
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

//home page 
app.get('/', (req, res) => {
    conn.query("SELECT DISTINCT Report.RHost FROM Report;").then(data => {
        console.log(data)
        res.render("index.html", {Names: data});
    }).catch(err => console.log(err))
})

//display hardware
app.post
('/hardware', (req, res) => {
    console.log(typeof(req.body.submit), req.body)
    //do not need to worry about sql injection because user cannot type in the input
    var sql = "SELECT Item.IField, Item.IValue, Report.RHost FROM Item INNER JOIN Report ON Report.ID = Item.ReportID WHERE Report.RHost='" + req.body.submit + "'AND ((((Item.ReportID)=Report.ID) AND ((Item.IID)=261)) OR (((Item.IID)=263)) OR (((Item.IID)=517)) OR (((Item.IID)=518)) OR (((Item.IID)=520)) OR (((Item.IID)=530)) OR (((Item.IID)=3864)));" 
    conn.query(sql).then(data => {
        console.log(data)
        res.render("display.html", {Report: data});
    }).catch(err => console.log(err))
})

//display software
app.post
('/software', (req, res) => {
    //do not need to worry about sql injection because user cannot type in the input
    var sql = "SELECT DISTINCT Report.RHost, Item.IField, Item.IValue FROM Report INNER JOIN Item ON Report.ID = Item.ReportID WHERE Report.RHost='" + req.body.submit + "'AND ((((Item.ReportID)=Report.ID) And ((Item.IID)=538)) Or (((Item.IID)=539)) Or (((Item.IID)=2581)) Or (((Item.IID)=518)) Or (((Item.IID)=520)) Or (((Item.IID)=528)) Or (((Item.IID)=530)) Or (((Item.IID)=1028)) Or (((Item.IID)=514)) Or (((Item.IID)=2583)) Or (((Item.IID)=534)) Or (((Item.IID)=517)) Or (((Item.IID)=3845)) Or (((Item.IID)=3847)) Or (((Item.IID)=540)) Or (((Item.IID)=3859)) Or (((Item.IID)=3864)) Or (((Item.IID)=2306)) Or (((Item.IID)=523)) Or (((Item.IID)=524)) Or (((Item.IID)=526)));";
    conn.query(sql).then(data => {
        console.log(data)
        res.render("display.html", {Report: data});
    }).catch(err => console.log(err))
})

const listener = http.listen(3000, () => {
    console.log("Your app is listening on port " + 3000);
});