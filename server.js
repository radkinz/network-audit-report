const express = require('express');
const app = express();
const http = require("http").Server(app);
const bodyParser = require("body-parser");

//setup environment variables
require('dotenv').config();
const database_path = process.env.DATABASEPATH;

//access the access database
const ADODB = require('node-adodb');
const conn = ADODB.open(database_path);

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
        res.render("index.html", { Names: data });
    }).catch(err => console.log(err));
})

//pc track page
app.get('/pctrack', (req, res) => {
    res.sendFile(__dirname + "/views/pctrack.html");
})

//return serial nunmber to client for pc track form
app.post('/pctrackpost', (req, res) => {
    //insert into pc track database
    var sql = 'INSERT INTO PcTrack(UserName, ComputerName, SerialNumber, ESNNumber, Building, Department, Room, RemoteComputerName, Function, Instrument, Orientation, Browser, TimeSubmitted) VALUES ("' + req.body.username  + '","' + req.body.computername + '","' + req.body.serialnumber + '","' + req.body.ESNNumber + '","' + req.body.Building + '","' + req.body.Department + '","' + req.body.Room + '","' + req.body.RemoteComputerName + '","' + req.body.Function  + '","' + req.body.Instrument  + '","' + req.body.Orientation  + '","' + req.body.Browser + '","' + req.body.Timestamp + '")'

    conn
        .execute(sql, 'SELECT @@Identity AS id')
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
        })
        .catch(error => {
            console.error(error);
        });



    //go back to homepage
    res.redirect("/")
})

//display hardware
app.post
    ('/hardware', (req, res) => {
        //do not need to worry about sql injection because user cannot type in the input
        var sql = "SELECT Item.IField, Item.IValue, Report.RHost FROM Item INNER JOIN Report ON Report.ID = Item.ReportID WHERE Report.RHost='" + req.body.submit + "'AND ((((Item.ReportID)=Report.ID) AND ((Item.IID)=261)) OR (((Item.IID)=263)) OR (((Item.IID)=517)) OR (((Item.IID)=518)) OR (((Item.IID)=520)) OR (((Item.IID)=530)) OR (((Item.IID)=3864)));"
        conn.query(sql).then(data => {
            console.log(data);
            res.render("display.html", { Report: data });
        }).catch(err => console.log(err));
    })

//display software
app.post
    ('/software', (req, res) => {
        //do not need to worry about sql injection because user cannot type in the input
        var sql = "SELECT DISTINCT Report.RHost, Item.IField, Item.IValue FROM Report INNER JOIN Item ON Report.ID = Item.ReportID WHERE Report.RHost='" + req.body.submit + "'AND ((((Item.ReportID)=Report.ID) And ((Item.IID)=538)) Or (((Item.IID)=539)) Or (((Item.IID)=2581)) Or (((Item.IID)=518)) Or (((Item.IID)=520)) Or (((Item.IID)=528)) Or (((Item.IID)=530)) Or (((Item.IID)=1028)) Or (((Item.IID)=514)) Or (((Item.IID)=2583)) Or (((Item.IID)=534)) Or (((Item.IID)=517)) Or (((Item.IID)=3845)) Or (((Item.IID)=3847)) Or (((Item.IID)=540)) Or (((Item.IID)=3859)) Or (((Item.IID)=3864)) Or (((Item.IID)=2306)) Or (((Item.IID)=523)) Or (((Item.IID)=524)) Or (((Item.IID)=526)));";
        conn.query(sql).then(data => {
            console.log(data);
            res.render("display.html", { Report: data });
        }).catch(err => console.log(err));
    })

//get pc track info
app.post
    ('/pctrackinfo', (req, res) => {
        conn.query("SELECT DISTINCT PcTrack.ComputerName, PcTrack.SerialNumber, PcTrack.ESNNumber, PcTrack.Building, PcTrack.Department, PcTrack.Room, PcTrack.RemoteComputerName, PcTrack.Function, PcTrack.Instrument, PcTrack.Orientation, PcTrack.Browser FROM PcTrack WHERE PcTrack.ComputerName='" + req.body.submit + "'").then(data => {
            console.log(data);
            res.render("pctrackdisplay.html", { Report: data });
        }).catch(err => console.log(err));
    })

const listener = http.listen(3000, () => {
    console.log("Your app is listening on port " + 3000);
});