const express = require('express');
const app = express();
const curDir = process.cwd();
//const session = require('express-session');
const basicAuth = require('express-basic-auth');

//----------------------------------------------------------------Presented as an in-memoery data table
const db = require('./db.js');
const Person = require('./Person.js');  //data model
const init_data= require('./data.js');  //presented as existing data
//------------------------------------------------------------------------bring in the existing data into memory
let people=[];
let n=0;
for (p of init_data){
    let ps = new Person(p.first_name,p.last_name,p.age,p.address);
    ps.status = "created at: " + db.toLocalTimeNow();
    ps.id = ++n;
    people.push(ps);
}
//------------------------------------------------------------------------------------
app.use(basicAuth({
    users: { 'admin': 'pass' },
    challenge:true
}))

/*app.use(session({
    secret: 'seq key',
    resave: false,
    saveUninitialized: true,
  }));
*/
app.get('/', function (req, res) {
    console.log(req.auth);
    res.sendFile(curDir + '\\dbmanager.html');
});

 
app.get('/web', (req,res)=>{
    //console.log(req.headers);
    let so= req.query.searchOption;
    let data;
    if (so=='sfn') data=db.searchByFirstName(people, req.query.first_name);
    else if (so=='sln') data=db.searchByLastName(people, req.query.last_name);
    else if (so=='sad') data=db.searchByAddress(people, req.query.address);
    else if (so=='sag') data=db.searchByAge(people, req.query.age, req.query.ageFilter)
    else if (so=='all') data=people;
    res.send(data);
});

app.put('/web', (req, res)=>{
    let id=req.query.id;
    let fn= req.query.first_name;
    let ln= req.query.last_name;
    let adr=req.query.address;
    let age= req.query.age;
    let person = new Person(fn,ln,age,adr);
    person.id = id;
    res.send(db.add(people, person));
 }); //handle requests with db

app.post('/web', (req, res)=>{
    let fn= req.query.first_name;
    let ln= req.query.last_name;
    let adr=req.query.address;
    let age= req.query.age;
    let person = new Person(fn,ln,age,adr);
    person.id = req.query.id;
    res.send(db.update(people, person));
 }); //handle requests with dbop.js

app.delete('/web', (req, res)=>{
    res.send(db.remove(people, req.query.id));
}); //handle requests with dbop.js

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("App instance listening at %s:%s", host, port)
})