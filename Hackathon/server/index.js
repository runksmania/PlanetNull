var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
//var cookieParser = require('cookie-parser');
var mysql = require('mysql')
var queries = require('./queries')
var app = express();
var connectObject = {
    host     : 'localhost',
    user     : 'root',
    password : '2357dude',
    database : 'NullPlanet'
}



const results = {
    loginPage: (req, res) => {       
        var html = fs.readFileSync('/var/www/nullPlanet/ROCKET.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    },
    backToHome: (req, res) => {       
        var html = fs.readFileSync('/var/www/nullPlanet/index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }
}

const dbCallBacks = {
    loginQuery: (req, res, connection) => function (err, rows, fields) {
        if (err) throw err
        //if there is no user row, login fails
        console.dir(rows)
        connection.end()     
        if(!rows.length) return results.loginPage(req, res)
        //add the salt to the password and hash the password
        //compare the hashed entered password to the db value, and fail if they do not match
        //set the cookie to logged in with a 24 hour expiration time
        //res.cookie('username' , req.body.Username, {expire : new Date() + 60 * 60 * 1000});
        return results.backToHome(req, res)
    },
    createAccountQuery: (req, res, connection) => function (err, rows, fields) {
        if (err) throw err
        //if there is no user row, login fails
        //console.dir(rows)
        connection.end()
        //if(!rows.length) return results.loginPage(req, res)
        //add the salt to the password and hash the password
        //compare the hashed entered password to the db value, and fail if they do not match
        //set the cookie to logged in with a 24 hour expiration time
        //res.cookie('username' , req.body.Username, {expire : new Date() + 60 * 60 * 1000});
        return results.backToHome(req, res)
    },
    viewAllEvents: (req, res, connection) => function (err, rows, fields) {
        if (err) throw err
        //if there is no user row, login fails
        //console.dir(rows)
        connection.end()
        //if(!rows.length) return results.loginPage(req, res)
        //add the salt to the password and hash the password
        //compare the hashed entered password to the db value, and fail if they do not match
        //set the cookie to logged in with a 24 hour expiration time
        return results.backToHome(req, res)
    }
}


const loginRequest = (req, res) => body => {
    const loginQuery = queries.login(body.Username)
    //get the user row from the db
    console.dir(loginQuery)
    var connection = mysql.createConnection(connectObject);
    connection.connect()
    connection.query(loginQuery, dbCallBacks.loginQuery(req, res, connection))
}
const createAccountRequest = (req, res) => body => {
    const userData = {
        name: body.name,
        age: body.age,
        hashPassword: body.password,
        salt: 'NaCl'+body.Username,
        username: body.Username,
        email: body.email,
        phone: body.phone
    }
    const createAccountQuery = queries.createUser(userData)
    //get the user row from the db
    console.dir(createAccountQuery)
    var connection = mysql.createConnection(connectObject);
    connection.connect()
    connection.query(createAccountQuery, dbCallBacks.createAccountQuery(req, res, connection))

    
}
const viewAllEventsRequest = (req, res) => body => {
    
    const viewAllEventsQuery = queries.viewAllEvents()
    //get the user row from the db
    console.dir(viewAllEventsQuery)
    var connection = mysql.createConnection(connectObject);
    connection.connect()
    connection.query(viewAllEventsQuery, dbCallBacks.viewAllEventsQuery(req, res, connection))

}

const postFunctions = {
    Login: loginRequest,
    CreateAccount: createAccountRequest,

}

const getFunctions = {
    viewAllEvents: viewAllEventsRequest
}
/*
connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})
*/

app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());

app.get('/', function(req, res){
    console.log('GET /')
    var html = fs.readFileSync('/var/www/nullPlanet/index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/index.html', function(req, res){
    console.log('GET /')
    var html = fs.readFileSync('/var/www/nullPlanet/index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/PlanetRocket.html', function(req, res){
    console.log('GET /PlanetRocket.html')
    var html = fs.readFileSync('/var/www/nullPlanet/PlanetRocket.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/ROCKET.html', function(req, res){
    console.log('GET /ROCKET.html')
    var html = fs.readFileSync('/var/www/nullPlanet/ROCKET.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/About.html', function(req, res){
    console.log('GET /About.html')
    var html = fs.readFileSync('/var/www/nullPlanet/About.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/SIGN.html', function(req, res){
    console.log('GET /SIGN.html')
    var html = fs.readFileSync('/var/www/nullPlanet/SIGN.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/sidebar.frag', function(req, res){
    console.log('GET /sidebar.frag')
    var html = fs.readFileSync('/var/www/nullPlanet/sidebar.frag');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/ROCKET.css', function(req, res){
    console.log('GET /')
    var html = fs.readFileSync('/var/www/nullPlanet/ROCKET.css');
    res.writeHead(200, {'Content-Type': 'text/css'});
    res.end(html);
});
app.get('/ROCKET.js', function(req, res){
    console.log('GET /')
    var html = fs.readFileSync('/var/www/nullPlanet/ROCKET.js');
    res.writeHead(200, {'Content-Type': ' application/javascript'});
    res.end(html);
});
app.get('/ViewAllEvents.html', function(req, res){
    console.log('GET /ViewAllEvents.html');
    var html = fs.readFileSync('/var/www/nullPlanet/ViewAllEvents.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});
app.get('/viewAllEvents', function(req, res){
    console.log('GET /viewAllEvents query');
    console.dir(req.body);
    getFunctions['viewAllEvents'];
    
});
app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    if(typeof postFunctions[req.body.type] === 'function') postFunctions[req.body.type](req, res)(req.body)
    else{
        var html = fs.readFileSync('/var/www/nullPlanet/index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    }
    
});



port = 8123;
app.listen(port);
console.log('Listening at http://localhost:' + port)
