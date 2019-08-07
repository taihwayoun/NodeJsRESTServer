# A Simple NodeJs REST Server
A RESTful server written in Node.js

All of the following are done on the command line.

Required:
<ul>
<li>	npm
<li>	nodejs (install: npm node)
<li>	express-basic-auth (intall: npm express-basic-auth)
</ul>

Then
<ul>
<li>	in the same folder as these guys are: install express (npm install express –save)
<li>	npm install mocha
</ul>

To start
<ul>
<li>node server
<li>once the server is running, navigate to the following url: http://localhost:8080
<li>	username: admin, password: pass
<li>	Management page is self-explanatory
</ul>

To test
<ul>
<li> install mocha: npm install mocha
<li>	In the same folder: npm test
<li>	You are free to add tests.
</ul>


Files:
<ul>
<li>	Server.js : a basic REST server, with in-memory data which are installed once the server file is run
<li>	Db.js: the main REST engine, with a couple of auxiliary functions
<li>	Person.js: the Person model
<li>	Data.js: an array of JSON objects to be installed as the initial data set
</ul>

Functions
<ul>
<li>	All REST functions return an array of JSON objects, at least []; unfortunately, not error-free  (therefore, no stress testing)
<li>	get functions: searchByName, searchByLastName, searchByAddress, searchByAge
<li>	post: update
<li>	put: add
<li>	delete: remove
<li>	auxiliary functions: getById, toLocalDateTime
</ul>
