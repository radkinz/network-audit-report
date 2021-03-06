# JMU CSM Tech Support

A web application to help JMU IT student-assistants and computing specialists get/organize computer data.

## AIDA64

By using [AIDA64 Network Audit](https://www.aida64.com/products/aida64-network-audit), we were able to inventory a wide range of computer data (hardware & software)
and dump it into one access database. The audit software abides to a specific database layout, as it drops the data into a table called `item` which contains 
8 columns - `IPage` , `IDevice` , `IGroup` , `IField` , `IValue` , `IIcon` , `IID` , `ReportID` . This unconventional layout, initially, posed a considerable challenge
in our attempts at querying the correct information.

By running AIDA64 in a batch file distributed by group policy, we could easily update the database with computer information of all JMU computers connected to the 
network.

## node-adodb

Since the audit software dumps the data into an access database, we used the JavaScript library - `node-adodb` - to query the access database using SQL syntax.

## Pc-Track
`Pc-Track` was the second table in our database which we populated with computer data that `AIDA64` could not obtain, such as, computer location by department, room number, or building.

We obtain this data through using a form that lies within the web app. Overtime student-assistants can make their way through filling out the pc-track form for each JMU computer. 
Although this process is inconvenient, it is good that once we get the data, it stays in the database forever.

## Hosting

This JMU web app is hosted within the JMU CSM [IIS](https://www.iis.net/) server. This app is only designated to be used by JMU IT student-assistants and computing specialists,
so it lies confortably within a firewall, so it can only be accessed by computers on the JMU network.

## UI
![homepage](/public/images/homepage.png)

The UI is honestly pretty bland, but it gives a good layout of the features for obtaining computer information as well as accessing the Pc-Track form.

## Final Notes

I made this web application as part of my completion as a JMU IT student assistant during the summer of 2021. I worked under [Mr. Shiflet](https://www.jmu.edu/chemistry/people/all-people/staff/shiflet-winston.shtml) in the Biophys building for about 40 hours each week. Aside from making the web app, I learned about disc imaging, computer trouble-shooting techniques, and what it's like to maintain numerous computers within the university setting. Despite the many hours alone in the window-less server room, this experience has been majorly eye-opening, and I had some of the most fun in my life. 

