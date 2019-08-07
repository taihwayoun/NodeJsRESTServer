# NodeJsRESTServer
A RESTful server written in Node.js

Required:
•	npm
•	nodejs (install: npm node)
•	express-basic-auth (intall: npm express-basic-auth)

all on the command line

Then
•	in the same folder as these guys are: install express (npm install express –save)
•	npm install mocha

To start
•	node server
•	once the server is running, get the web: http://localhost:8080
•	username: admin, password: pass
•	Management page is self-explanatory

To test
•	In the same folder: npm test
•	You are free to add tests.


Files:
(1)	Server.js : a basic REST server, with in-memory data which are installed once the server file is run
(2)	Db.js: the main REST engine, with a couple of auxiliary functions
(3)	Person.js: the Person model
(4)	Data.js: an array of JSON objects to be installed as the initial data set

Functions
•	All REST functions return an array of JSON objects, at least []; unfortunately, not error-free  (therefore, no stress testing)
•	get functions: searchByName, searchByLastName, searchByAddress, searchByAge
•	post: update
•	put: add
•	delete: remove
•	auxiliary functions: getById, toLocalDateTime
