/*The following example from MDN shows how you can use sessionStorage to
auto - save the contents of a text field and restore the contents of
that text field if the browser is accidentally refreshed.*/
// Get the text field that we're going to track
let field = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
field.addEventListener("change", function () {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});

/*Check whether localStorage contains a data item called bgcolor
using getItem().
If localStorage contains bgcolor, run a function called setStyles()
that grabs the data items using Storage.getItem() and use those values
to update page styles.
If it doesn't, run a function called populateStorage(), which uses
Storage.setItem() to set the item values, then run setStyles()*/
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
}
setStyles();

const populateStorage = () => {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);
};

const setStyles = () => {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
};

/*How to create a cookie in Javascript
As you've seen before, the document interface represents
the web page loaded in a user's browser.
Since cookies are stored on a user's browser, it makes sense that the
document object also allows you to get/set cookies on a user's browser:*/

const firstCookie = "favoriteCat=million";
document.cookie = firstCookie;
const secondCookie = "favoriteDog=bambi";
document.cookie = secondCookie;
document.cookie; // Returns "favoriteCat=million; favoriteDog=bambi"

/*Deleting a cookie in JavaScript
You can delete cookies using JavaScript by setting
a cookie's expiration date
to a date in the past, causing them to expire:*/

const firstCookie1 = "favoriteCat=million";
document.cookie = firstCookie1;
document.cookie; // Returns "favoriteCat=million"
// specify the cookies "name" (the key) with an "="
// and set the expiration date to the past
document.cookie = "favoriteCat=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie; // ""
const { prototype } = require("events");
///////////////////////////////////////////////////////////////////

const express = require("express");

// Create the Express app.
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
port = 3000;
app.get("/login", (req, res) => {});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
/////////////////////////////////////
// The application will send the same response to any GET request
//  that matches the string or expressions in the array routes.
let paths = ["/", "/ab+cd", "/a/"];

app.get(paths, (req, res) => {
  // Send response
});
/////////////////////////////////////
/*The callback function is called by Express whenever an incoming request
matches the route. The function defines two parameters, req and res,
giving you access respectively to the Request object and the Response
object. The Request (req) object is used to get details about the
client request that's currently being processed.
The Response (res) object is used to prepare a response to return to
the client.*/
/*The res object also supports sending JSON back to the client through
the .json() method:*/

app.get('/json', (req, res) => {
  const resp = {
    property1: "value1",
    property2: "value2",
  };
  res.json(resp); //This will call JSON.stringify() on the input to res.json()
})
/*1-JSON.stringify(value) will turn the value passed into it into a JSON string.
2-JSON.parse(str) will turn a JSON-formatted string into a JavaScript object.*/
/*3-res.json() It sends a JSON response. This method is identical
to res.send() when an object or array is passed, but it also converts
non-objects to json.*/

// There is no actual difference between res.send and res.json,
// both methods are almost identical. res.json calls res.send at the end.
// When you have an object or array which you have to pass as a response
// then you can use any one of them.

// But the main difference between res.json and res.send comes into picture
// when you have to pass non objects as a response. res.json will convert
// non objects (ex. null, undefined etc) as well which are actually not
//a valid JSON by calling JSON.stringify() whereas res.send will not convert them.

//////////////////////////////////////////////////////////
const data = {
  users: [],
};

// Use POST to add a user
app.post("/users", (req, res) => {
  let newUser = {
    name: "Phyllis",
    age: 68,
  };
  data.users.push(newUser);
  res.send(newUser);
});

// Use GET to retrieve a list of all users
app.get("/users", (req, res) => {
  res.send(users);
});
//////////////////////////////////////////////////////////
// For example with fetch in the browser console, you
// could test the POST to /users shown above:

fetch('/users', {
    method: "POST",
    body: JSON.stringify({username: "Demo"}),
    headers: {"Content-Type": "application/json"}
}).then(res => res.json()).then(resBody => console.log(resBody));
////////////////////////////////////////////////////////
// Express server processes routes in the order they are placed in the code. When it gets to the first one that matches the incoming request,
// it immediately responds.
// This is bad code! DO NOT DO THIS
app.get('/hello', (req, res) => {
  res.send("First hello");
});
app.get('/hello', (req, res) => {
  res.send("Second hello");
});
// Then any visitor going to the /hello route will only see "First hello".
/////////////////////////////////////////////////////////
// While it may seem obvious that a duplicate route is blocked,
// it is less clear when the routes start out the same, and end differently.

// This is bad code! DO NOT DO THIS
app.get('/goodbye/*', (req, res) => {
    res.send("Goodbye, my friend!");
});

app.get('/goodbye/until/:time', (req, res) => {
    res.send(`Goodbye. See you ${req.params.time}.`);
});

app.get('/goodbye/until/forever', (req, res) => {
    res.send("So long. Farewell. Have a great life!");
});
/*In this case, when Express sees a route that starts
with /goodbye/ followed by anything (that's what the * means),
then it will immediately respond with the text "Goodbye, my friend!".
That means visitors never get to see the other two messages.*/
/////////////////////////////////////////////////////////
// The proper and only way to write the code for routes that are similar,
// is to put the most specific one first.
// In this case, /goodbye/until/forever is the most specific.
// It is long and has no route parameters.

/*The similar route with a parameter in place of forever should be
next: /goodbye/until/:time. This order means that any time other
than "forever" will match this route (because forever was matched first,
so the processing never got this far).*/
// This is good code
app.get('/goodbye/until/forever', (req, res) => {
    res.send("So long. Farewell. Have a great life!");
});

app.get('/goodbye/until/:time', (req, res) => {
    res.send(`Goodbye. See you ${req.params.time}.`);
});

app.get('/goodbye/*', (req, res) => {
    res.send("Goodbye, my friend!");
});
// Best practices for route order
// Order the routes from specific to generic
// Place similar paths together
// In other words, this code will be easier to maintain...
// This is a good example
app.get('/users/:id', (req, res) => {
    res.send("Details for a single user");
});

app.get('/users', (req, res) => {
    res.send("List of all users");
});

app.get('/products/:id', (req, res) => {
    res.send("Details for a single product");
});

app.get('/products', (req, res) => {
    res.send("List of all products");
});

app.get('/purchases/from/:startDate/to/:endDate/user/:userId', (req, res) => {
    res.send("List of all purchases in a date range for a single user");
});

app.get('/purchases/from/:startDate/to/:endDate', (req, res) => {
    res.send("List of all purchases in a date range");
});

app.get('/purchases/user/:userId', (req, res) => {
    res.send("List of all purchases by a single user");
});

app.get('/purchases/:id', (req, res) => {
    res.send("Details for a single purchase");
});
/////////////////////////////////////////////////////
const app1 = express();
app1.use(express.json());
// Once the line above has been called, the body of the request will
// be available in req.body within each route's handler function.
//////////////////////////////////////////////////////////////////
//Parsing url parameters
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  // Process request
});
///////////////////////////////////////////////////////
//Sending the response
app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.status(200).send(`User details for userId: ${userId}`);
});
///////////////////////////////////////////////////////
// Express's res object supports methods that can set HTTP status codes
// and sending responses, whether that be text or JSON. res.end() is
// also called by res.send() and res.json() so that you won't have to
// manually do that. This doesn't mean that your server can't still
// hang so make sure you call at least one of the methods that end the
// response!
////////////////////////////////////////////////////////////////////
const express = require("express");

const app2 = express();

app2.use(express.json());

// GET /users/:userId
app2.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;
  res.status(200).send(`User details for userId: ${userId}`);
});

const port = 5000;
app2.listen(port, () => console.log("Server is listening on port", port));
////////////////////////////////////////////////////////////////////////

// PROPERTY/METHOD------------------VALUE/FUNCTION
// req.body-------------------The parsed body of the request
// req.query-------------------Object containing query string parameters
// req.params-------------------Object containing named route parameters

// req.body
// For example, say you have a client and server built like the following:

// Client sending request
const data1 = {
    firstName: 'John',
    lastName: 'Adams'
};

fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data1)
})
// app.js
const express = require('express');
const app3 = express();

// This line allows the body of a request to be parsed into the req.body object
app3.use(express.json());

// Server side handling
app3.post('/users', (req, res) => {
    console.log(req.body);
})
// { firstName: 'John', lastName: 'Adams' } will be printed in your terminal
//  when the request is made
///////////////////////////////////////////////////////////////////////////
// req.query
// Express can parse query strings for you within a request
// and place them in the form of an object in req.query
// For example, if you made the fetch request:

fetch('http://localhost:4000/users?firstName=John&lastName=Adams', {
    method: 'GET'
})
// And had a server handling this request like so:

// Server side handling
app.get('/users', (req, res) => {
    console.log(req.query.firstName);
    console.log(req.query.lastName);
})
// You would see the following in your terminal:

// John
// Adams
///////////////////////////////////////////////////////////////////////////
// req.params

fetch('http://localhost:4000/users/John/Adams', {
    method: 'POST'
})
// Server side handling
app.post('/users/:firstName/:lastName', (req, res) => {
    console.log(req.params.firstName);   // John
    console.log(req.params.lastName);    // Adams
})
///////////////////////////////////////////////////////////////////////////
// PROPERTY/METHOD	VALUE--------------------FUNCTION
// res.status()------------------	Set the HTTP status code of the response
// res.send()-----------	Send plaintext response to the client
// res.json()-------------	Send response in the form of JSON to the client
// app.js
const users = [
    {
        firstName: 'John',
        lastName: 'Adams'
    },
    {
        firstName: 'Thomas',
        lastName: 'Jefferson'
    },

]

app4.get('/users', (req, res) => {
    try {
        // Process request data
        res.status(200);
        res.json(users);
    } catch(e) {
        // On failure
        res.status(500);
        res.send("Failed to POST to /users");
    }
})
// Since Express is built on top the http package, a lot
// of methods and properties are still accessible (e.g. res.statusCode
// to get status codes, or even res.end() if you want to end your
// response without sending any data).
//////////////////////////////////////////////////////////////////////

// In Express, a middleware function is a function that takes three arguments,
// in this specific order:
// req- the request object
// res- the response object
// next- according to the Express documentation on using middleware:
// "the next middleware function in the application’s request-response cycle"
const express = require("express");
const app4 = express();
// create a function `logTime` invoking the arguments `req`, `res`, `next`
const logTime = (req, res, next) => {
// have your function log the "Current time: " string with the Date function
// to an ISO string
console.log("Current time: ", new Date().toISOString());
// Since no response has been returned yet invoke the `next` function so it
// knows to move on to the next middleware function
next();
};
///////////////////////////////////////////////////////////////////////////
// You can bind middleware to an instance of the app object by using
// the app.use() and app.METHOD() functions, where METHOD is the HTTP
// method of the request that the middleware function handles
// (such as GET, PUT, or POST) in lowercase (e.g. app.get() for a GET request).
// Now, update the app.get('/') route so that it calls logTime before it
// invokes the anonymous callback function that sends back "Hello World!"

// bind the app object with the `get` method with the arguments "/" route,
// `logTime` function, and `req`, `res`.
app.get("/", logTime, (req, res) => {
  //send a response of string "Hello World!"
  res.send("Hello World!");
  //note: We do not need to invoke a `next` function because we have returned
  //a successful response, ending this series of functions.
});
// Let's recap what just happened:

// When the user lands on localhost:3000, a GET request is made to
// the "/" route of the Express server.
// The first middleware function this route invokes is logTime. In logTime,
// the current time is logged. At the end of logTime, it invokes next, which
// represents the next middleware function.
// The next middleware function in this example is the anonymous callback
// function that runs res.send("Hello World!").
///////////////////////////////////////////////////////////////////////////
// You could invoke as many middleware functions as you'd like.
// In addition, because the req and res objects are passed through
// every one of the middleware functions, you could store values in
// the req object for the next middleware function to use.

const passOnMessage = (req, res, next) => {
  console.log("Passing on a message!");
  req.passedMessage = "Hello from passOnMessage!";
  next();
};
// Then, let's add this middleware function to the app.get('/') route and
// then console.log the req.passedMessage in one of the later middleware
// functions:

app.get("/", logTime, passOnMessage, (req, res) => {
  console.log("Passed Message: ", req.passedMessage);
  res.send("Hello World!");
});
// In the example above, the passedMessage was added to the req object
// so that it could be used in a later middleware function. Alternatively,
// you might instead want to store properties inside of the res.local object
// so that you don't accidentally override an existing property in the
// req object.
///////////////////////////////////////////////////////////////////////////

// Instead of passing each middleware function in separate arguments,
// you could also pass them all in as one array argument:

app.get("/", [logTime, passOnMessage], (req, res) => {
  console.log("Passed Message: ", req.passedMessage);
  res.send("Hello World!");
});
///////////////////////////////////////////////////////////////////////////
// Application-level middleware
// To be clear, with the current set up, logTime and passOnMessage will only
// be executed for the app.get('/') route. For example, let's say you set
// up another route:
app.get("/bye", (req, res) => {
  res.send("Bye World.");
});
// Because that route does not currently take in logTime as one of its arguments,
// it would NOT invoke the logTime middleware function. To fix this, you could
// simply pass in the logTime function, but if there was a middleware function
// that you wanted to execute for every single route, this could be pretty
// tedious.
// Setting up an application-level middleware function that runs for every
// single route is simple.
// To do this, remove logTime from the app.get('/') arguments. Instead, add
// it as an application-wide middleware by writing app.use(logTime).
// After doing this, your index.js file should look like this:

const express = require("express");
const app5 = express();
const logTime1 = (req, res, next) => {
  console.log("Current time: ", new Date().toISOString());
  next();
};
// `app.use(logTime)` an application-level middleware- invoked everytime
// the app recieves a request.
app5.use(logTime1);
const passOnMessage1 = (req, res, next) => {
  console.log("Passing on a message!");
  req.passedMessage = "Hello from passOnMessage!";
  next();
};

// `app.get('/') will only invoke when the specified route is requested.
// logTime is removed as a middleware for app.get('/')
app5.get("/", passOnMessage1, (req, res) => {
  console.log("Passed Message: ", req.passedMessage);
  res.send("Hello World!");
});

app5.get("/bye", (req, res) => {
  res.send("Bye World.");
});

// Define a port and start listening for connections.
const port1 = 3000;
app.listen(port1, () => console.log(`Listening on port ${port}...`));
// Now, whenever you navigate to either localhost:3000 or localhost:3000/bye
// the logTime middleware function will be executed. Notice how the
// passOnMessage is only executed for the app.get('/') route.

///////////////////////////////////////////////////////////////////////////
/*To access your static assets in Express you can use the built-in
 middleware function:*/
express.static(root, [options]);
// Note: The root argument is the physical location on the machine that hosts
// the files. While it could be a full path (e.g. /projects/myapp/public),
// it is more flexible to use a relative path (e.g. public - notice there is
// no /).
// In order for Express to send files to the browser, you must place
// this inside a call to app.use(),
app.use(path, express.static(root));
//Now, path is the URL path, and root is the folder on the machine.
///////////////////////////////////////////////////////////////////////////
// images\project-public-folder.png
// using the static assets in the public folder
app.use('/', express.static('public'));
// This shorthand variation does EXACTLY the same thing.
// using the static assets in the public folder
app.use(express.static('public'));
// What happens is that Express looks up the files relative to the public folder
// in your server folder, and provides them to the browser right in the root
// URL (/) of your server.
// Here are the urls to the files in the same order as shown in the project folder screenshot (above).
// http://localhost:5000/css/your-style.css
// http://localhost:5000/images/doggo.jpg
// http://localhost:5000/images/logo.png
// http://localhost:5000/scripts/hello.js
// http://localhost:5000/helloworld.html
// http://localhost:5000/prospectus.pdf
///////////////////////////////////////////////////////////////////////////
// You can also use multiple static assets directories and call
// the express.static middleware function multiple times.
// The order in which you set up the static directories with the express.static
// function is the order Express looks up the files. In the following example
// the public folder is called on before the files folder in the following
// example.
// looks up the static files in the public folder
app.use(express.static('public'));
// then looks up the static files in the files folder
app.use(express.static('files'));
// The order matters - if a file with the same name is in both public and files,
// then the public version will be returned because it is in the code first.
///////////////////////////////////////////////////////////////////////////
// By mounting a path as the first argument in the middleware function you
// can determine the specific path the browser uses to retrieve the files
// in the static folder.
// This example shows a browser path of /static for files in a project folder
// named public.
// access the static files in the public folder through the /static path
app.use('/static', express.static('public'));
// Now, all the files are at /static instead of the root URL (/):
// http://localhost:5000/static/css/your-style.css
// http://localhost:5000/static/images/doggo.jpg
// http://localhost:5000/static/images/logo.png
// http://localhost:5000/static/scripts/hello.js
// http://localhost:5000/static/helloworld.html
// http://localhost:5000/static/prospectus.pdf
///////////////////////////////////////////////////////////////////////////

// Special case for production servers
// The folder path you provide to the express.static function is relative to
// the folder where you are when you start the node process. If you run the
// Express app from a folder other than the project, it is safer to use an
// absolute path to serve your static files.The first part joined to the path is
// the server folder (stored as a global variable __dirname__ automatically
// set by Node.js), then the folder as always.
// Here's a complete statement serving files in the browser path
// of /static from the project's folder public.
app.use('/static', express.static(path.join(__dirname, 'public')));
// Breakdown of reading the code above:

// app.use() - method that declares Express middleware
// /static - path needed in the browser after the server & port,
//and before the subfolder/filename of the asset
// path.join() - method that joins the specific path segments into
//one absolute path (path is a built-in Node.js module that you will need
//to import)
// __dirname - is an global variable that tells the absolute path of
 //the folder containing the specified file
// public is the folder in the project that holds the static assets
///////////////////////////////////////////////////////////////////////////
// Defining a custom error handler
// As you've seen in earlier lessons, Express middleware functions define three
// parameters (req, res, next) and route handlers define two or three parameters
// (req, res, and optionally the next parameter):

// Middleware function.
app.use((req, res, next) => {
  console.log('Hello from a middleware function!');
  next();
});

// Route handler function.
app.get('/', (req, res, next) => {
    if (req.params.message) {
        res.send(`Echo: ${req.params.message}`);
    } else {
        console.log('Hello from intermediate route hander function')
        next();
    }
});

// Route handler function.
app.get('/', (req, res) => {
  res.send('Hello from a route handler function!');
});
// Error handling functions look the same as middleware functions except they
// define four parameters instead of three—err, req, res, and next:

app.use((err, req, res, next) => {
  console.error(err);
  res.send('An error occurred!');
});
///////////////////////////////////////////////////////////////////////////
// Custom error handler functions have to define four parameters; otherwise,
// Express won't recognize the function as an error handler.

// Define error handler functions after all other calls to app.use()
// and all of your application's route definitions:

// app.js

const express = require('express');

// Create the Express app.
const app6 = express();

// Define routes.

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});
app.get('/throw-error', (req, res) => {
  throw new Error('An error occurred!');
});
// Custom error handler.
app.use((err, req, res, next) => {
  console.error(err);
  res.send('An error occurred!  Please check the url, or wait a few minutes and try again.');
});
// Define a port and start listening for connections.
const port6 = 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
// This ensures that your custom error handler will get called to handle
// errors from any of your application's middleware or route handler functions.
// If you test your custom error handler by browsing to
// http://localhost:8080/throw-error (or any other route that doesn't
// have a handler), you'll see that it sends a response containing the
// text "An error occurred!".
///////////////////////////////////////////////////////////////////////////
// If you use your browser's developer tools to inspect the response of
// http://localhost:8080/throw-error, you'll notice that the response HTTP
// status code is 200 OK, which is the default status code used by Express
// when sending responses. You can use the res.status() method to set a
// different status code:

// Custom error handler.
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500);
  res.send('An error occurred! Please check the url, or wait a few minutes and try again.');
});
// Notice how the err.status property is checked to see if it has a value before
// the status is set to the literal numeric value 500. Giving priority to the
// err.status
///////////////////////////////////////////////////////////////////////////

// Error handlers, like route handlers, are executed by Express in the order
// that they're defined in, so defining a new error handler before the
// existing handler ensures that it'll be called first:

// Custom error handlers.

// Error handler to log errors.
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // TODO Log the error to the database.
  } else {
    console.error(err);
  }
  next(err);
});

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = process.env.NODE_ENV === 'production';
  res.render('error', {
    title: 'Server Error',
    message: isProduction ? null : err.message,
    stack: isProduction ? null : err.stack,
  });
});
// The new error handler simply uses the console.error() method to
// log errors to the console, provided that the NODE_ENV environment
// variable isn't set to "production". In the production environment,
// there's a TODO comment to log the error to the database. The console.error()
// method call in the existing error handler was removed; logging errors is now
// the responsibility of the new error handler.
// Also, notice that the new error handler calls the next() method passing
// in the err parameter (the current error) which passes control to the next
// error handler. An error handler needs to call next() or return a response.
// Failing to do this will result in the request "hanging" and consuming
// resources on the server.
///////////////////////////////////////////////////////////////////////////
// Defining a collection of route handlers
// While it's not required, a common convention is to create each Express router
// instance within its own Node module. Remember that in Node, each file is
// treated as a separate module. Create a folder in your project's root
// directory named routes; create three files called home.js, schedule.js,
// and roster.js within the folder. Then you'll need to include the following
// code in each:

const express = require('express');

// Create the router instance
// The express module exports the Router class via a property on theexpress
const router = express.Router();
// function, which is used to create an instance of a router.
// Previously, you've defined your routes using an Express Application (app)
// object. This is done the same way in a router instance. For this reason,
// a router can be thought of as a "mini-app".
// The Express Application (app) object and Express Router objects (router) also
// handle middlewares in the same way.
// Using the router.get() method, define a collection of routes for a sports
// team including "Home", "Schedule", and "Roster" pages.
// Start with home.js, which just contains a simple GET route:

// home.js - continued (after require and router declaration found above)

router.get('/home', (req, res) => {
 res.send('Our team homepage');
});
// Then move on to schedule.js:

// schedule.js - continued (after require and router declaration found above)
const weeklySchedule = [false, true, true, false, true, false, true];

router.get('/schedule/week', (req, res) => {
    // Send the full weekly schedule
    res.json(weeklySchedule);
});

router.put('/schedule/week/:day', (req, res) => {
    // Update the schedule for specified day to have a game
    const day = parseInt(req.params.day);
    weeklySchedule.splice(day, 1, true);
    res.json(weeklySchedule);
})
// And finally, fill out roster.js:

// roster.js - continued (after require and router declaration found above)
const roster = {
    pg: 'Randy',
    sg: 'Anthony',
    sf: 'Noah',
    pf: 'Benjamin',
    c: 'Miles'
}

router.get('/roster', (req, res) => {
    // Send roster data
    res.json(roster);
})

router.put('/roster/:position', (req, res) => {
    // Update position with data from request body
    const position = req.params.position;   // e.g. pg
    const newPlayer = req.body.name;        // e.g. Cameron
    roster[position] = newPlayer;
    res.json(roster);
})

router.delete('/roster/:position', (req, res) => {
    // Remove player from position
    const position = req.params.position;
    delete roster[position];
    res.json(roster);
})
// Export the router
// In all three files, you'll need to export the router to the module.exports
// property to import into your main application later:

// module.exports = router;
// For more information about the Express Router class, see the official
// documentation on Express Router
///////////////////////////////////////////////////////////////////////////
// You can also supply another argument to prepend a path for which to apply
// the router.

app.use('/', home);
// The routes are like middleware and are applied to any path beginning with
// the path provided (in this case every path since every path begins with /).
// This can make the router imports a lot more understandable from within
// app.js, and your routers' routes cleaner.
// For example, currently we have:

// app.js
app.use(schedule);

// schedule.js
router.get('/schedule/week', (req, res) => {
    // Send the full weekly schedule
    res.json(weeklySchedule);
});
// But using the path argument:

// app.js
app.use('/schedule', schedule);

// schedule.js
router.get('/week', (req, res) => {
    // Send the full weekly schedule
    res.json(weeklySchedule);
});
///////////////////////////////////////////////////////////////////////////
//Best Practices
// app.js
app.use('/home', home);
app.use('/schedule', schedule);
app.use('/roster', roster);

// routes/home.js
router.get('/', (req, res) => {
    res.send('Our team homepage');
});

// routes/schedule.js
router.get('/week', (req, res) => {
    // Send the full weekly schedule
    res.json(weeklySchedule);
});

// routes/roster.js

router.get('/', (req, res) => {
    // Send roster data
    res.json(roster);
});
///////////////////////////////////////////////////////////////////////////
// Load Env Variables for Node.js Apps
// 1-Via command line
// The simplest way to set an environment variable, is via the command line,
// by declaring and setting the environment variable before the node command:

// PORT=8080 node app.js
// This sets an environment variable called PORT and sets its value to 8080.
// You can even declare and set multiple environment variables:
// PORT=8080 NODE_ENV=development node app.js

// The NODE_ENV environment variable is a special variable that's used by many
// node programs to determine what environment the application is running in.
// For example, setting the NODE_ENV environment variable to production enables
// features in Express that help to improve the overall performance of your
// application. Whereas, setting NODE_ENV to development enabled features
// for more extensive debugging.
// 2-Within npm script
// The command-line approach also works within any npm script specified
// inside a package.json file:
// {
//   "scripts":
//   {
//   "start": "PORT=8080 NODE_ENV=development node app.js"
//   }
// }
///////////////////////////////////////////////////////////////////////////
// Environment variables in a Node.js application are stored as properties
// on the process.env object:
const port5 = process.env.PORT;
const port7 = process.env.PORT || 8080;
//If the PORT environment variable isn't declared and set, it'll have a value of undefined
///////////////////////////////////////////////////////////////////////////
//3-Using a .env file
// The .env file is simply a plaintext file with the environment
// variables stored as key value pairs;
PORT = 8080;
SECRET = password;
NODE_ENV = production;
SPACES = "this is a value with spaces";
// Having the file is not enough to start using these variables just yet.
// In Node.js, using the dotenv npm package is one way to read in environment
// variables. Once you set all of your environment variables in a .env file,
// the dotenv package will load your variables from that file and set them on
// the process.env object.
// app.js
const express = require('express');

// Load the environment variables from the .env file
require('dotenv').config();

// Create the Express app.
const app8 = express();

// Define routes.

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Define a port and start listening for connections.
const port8 = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
///////////////////////////////////////////////////////////////////////////
// If you're using Git for your source control, make sure that your
// .gitignore file includes an entry for .env files.
///////////////////////////////////////////////////////////////////////////


// A relational database management system is software that manages collections
// of structured data called databases.
// SQLite is one of many relational database management systems and the one
// that you will be using.
// A database is a collection of structured data that an RDBMS manages for you.
// The Structured Query Language (SQL) is a programming language that allows you
// to define the relational structure of the database and interact with the data
// in it.
///////////////////////////////////////////////////////////////////////////
//Database Table Schemas
// A table is a "logical" structure that defines how data is stored and
// contains that data that meets the definition. Most people think about
// tables like spreadsheets
// NAME	AGE_YRS	BREED	WEIGHT_LBS	MICROCHIPPED
// Callie	1	Corgi	16	no
// Charley	1.5	Basset Hound	25	no
// Jaxon	0.4	Beagle	19	yes
// In SQL, table columns must be given a specific type. Much like JavaScript
// variable types, each column type is allocated a maximum amount of storage.
///////////////////////////////////////////////////////////////////////////
// ANSI SQL supports the following types:

// The INTEGER should be familiar. It's just a number without a decimal.

// The DECIMAL type is a number with a decimal, a.k.a. a floating-point number.
// Another way you can use the DECIMAL type is to give it two arguments
// DECIMAL(4, 2) will hold the number 23.22, but not the numbers 123.22
// (too many total digits) or 23.222 (which it will just ignore the extra decimal
// places and store 23.22).
// There are three kinds of commonly used string types that databases support
// based on the ANSI SQL standard.
// The most commonly used type is known as the Variable Character, or VARCHAR
// So, to specify that a column can hold up to 50 characters, you would write
// VARCHAR(50) in the table definition.
// Another commonly used type is known simply as TEXT. This is a column that
// can contain an "unlimited" number of characters.
// Boolean types
// When you need to store a true or false value in the database, use
// the BOOLEAN type.
///////////////////////////////////////////////////////////////////////////

// Column types in SQLite
/*INTEGER - A number without decimals
REAL - A number with decimals (floating-point)
TEXT - A string
BLOB - Data stored exactly as it was input (good for images, really long text,
and other big "blobs" of stuff)
NUMERIC - Special case for numbers which auto-converts between the other
types, depending on the value

Fortunately, SQLite can understand the more rigid types, and it will
"translate" to the corresponding SQLite column type.

SQLite will convert the BOOLEAN type to NUMERIC.
false as 0 (zero)
true as 1 (one)*/
// NULL is a possible value in a column that represents an empty column value
// If you want the column to have a default value when no value is given on
// insertion, use the DEFAULT constraint
// A primary key is a column that contains unique identifiers for each entity
// in the table. For example, a Social Security Number is unique to a single
// person and could potentially be used as a primary key on a table that stores
// data of US citizens.
// Often, primary keys are integers (a.k.a. INTEGER PRIMARY KEY) because

// There is not another column that must have a unique value
// An integer primary key optimizes your SQL database for the fastest performance
// when retrieving data by the identifying column
// AUTOINCREMENT is commonly used in a primary key column,
// e.g. INTEGER PRIMARY KEY AUTOINCREMENT. 1234->1235->1236

// A record in a table is an instance of the entity, such as a record for
// Callie the Corgi in the dogs table.
//A column describes a property of an entity, such as breed for a dogs table.
//A table describes an entity, such as dogs. Its columns describe properties
//of the entity and its records are individual instances of the entity.
//Schema design tools
// Free Database Diagram (ERD) Design Tools:

// dbdiagram.io
// drawsql.app
// Lucidchart
// draw.io
// QuickDBD
///////////////////////////////////////////////////////////////////////////
// These tables (a.k.a. entities) contain rows (a.k.a. records) and columns
// (a.k.a. fields). You also learned how to uniquely identify table records by
// adding a PRIMARY KEY
// To relate one table to another, a FOREIGN KEY column is included which is
// associated with - or references the PRIMARY KEY in another table.

`people table:

SSN	FIRST_NAME	LAST_NAME
123-45-6789	John	Doe
987-65-4329	Jane	Doe
987-65-4320	John	Smith

jobs table:

ID	JOB_NAME	START_DATE	END_DATE	PERSON_SSN
1	Bookkeeper	1997-03-05	2004-09-30	123-45-6789
2	Janitor	2000-01-04		             987-65-4329
3	Marketer	2002-11-12	2005-12-20	987-65-4320
4	Accountant	2004-10-01		         123-45-6789
The column ssn is the PRIMARY KEY in the people table. The jobs
table uses the person_ssn column as the FOREIGN KEY to reference
rows in the people table`///////////////////////////////////////////////////////////////////////////
`people table:

SSN	FIRST_NAME	LAST_NAME
123-45-6789	John	Doe
987-65-4329	Jane	Doe
987-65-4320	John	Smith
jobs table:

ID	JOB_NAME	START_DATE	END_DATE	PERSON_SSN
1	Bookkeeper	1997-03-05	2004-09-30	123-45-6789
2	Janitor	2000-01-04		987-65-4329
3	Marketer	2002-11-12	2005-12-20	987-65-4320
4	Accountant	2004-10-01		123-45-6789
people table:

SSN	FIRST_NAME	LAST_NAME
123-45-6789	John	Doe
987-65-4329	Jane	Doe
987-65-4320	John	Smith
jobs table:

ID	JOB_NAME	START_DATE	END_DATE	PERSON_SSN
1	Bookkeeper	1997-03-05	2004-09-30	123-45-6789
2	Janitor	2000-01-04		987-65-4329
3	Marketer	2002-11-12	2005-12-20	987-65-4320
4	Accountant	2004-10-01		123-45-6789
A one-to-many relationship is exactly what it sounds like - an entity of
ONE type connects to ONE OR MORE (a.k.a. MANY) entities of another type.`///////////////////////////////////////////////////////////////////////////
`Here is a small portion of the data in the students table:

ID	NAME
1	Alim
2	Andrei
3	Belma
Here are a few records from the juice_boxes table:

ID	JUICE	DATE	STUDENT_ID
111	apple	2020-01-22	1
112	apple	2020-01-22	2
113	orange	2020-01-22	3
114	apple	2020-01-23	1
115	orange	2020-01-23	1
116	peach-mango	2020-01-23	2
117	grape	2020-01-23	3
Here's all the combinations of which student drank which juice on which day:

JUICE_BOX ID	JUICE	DATE	STUDENT_ID	STUDENT ID	STUDENT NAME
111	apple	2020-01-22	1	1	Alim
112	apple	2020-01-22	2	2	Adrei
113	orange	2020-01-22	3	3	Belma
114	apple	2020-01-23	1	1	Alim
115	orange	2020-01-23	1	1	Alim
116	peach-mango	2020-01-23	2	2	Adrei
117	grape	2020-01-23	3	3	Belma

And here's another way to represent this same data:

STUDENT ID	STUDENT NAME	JUICE_BOX ID	JUICE	DATE	STUDENT_ID
1	Alim	111	apple	2020-01-22	1
1	Alim	114	apple	2020-01-23	1
1	Alim	115	orange	2020-01-23	1
2	Adrei	112	apple	2020-01-22	2
2	Adrei	116	peach-mango	2020-01-23	2
3	Belma	113	orange	2020-01-22	3
3	Belma	117	grape	2020-01-23	3`;
///////////////////////////////////////////////////////////////////////////
`It can be very helpful to write down the representation of a database
to specify the way it is structured. This structure is called the schema.

Schema for students table:

COLUMN	TYPE	CONSTRAINTS
id	INTEGER	PRIMARY KEY
name	TEXT   NULL

Schema for juice_boxes table:

COLUMN	TYPE	CONSTRAINTS
id	INTEGER	PRIMARY KEY
juice	 TEXT
date	 TEXT
student_id	INTEGER	FOREIGN KEY REFERENCES students(id)
///////////////////////////////////////////////////////////////////////////
../images/db_schema.png`;
// Notice there is a direct relationship from the student_id field in the
// juice_boxes table to the id field in the students table. Many diagramming
// tools will label the connection line with a 1 and a * to represent the
// one-to-many relationship (as shown).
///////////////////////////////////////////////////////////////////////////
`SQL Commands
The following code shows how to create these tables with the one-to-many
relationship in SQLite3.

CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE juice_boxes (
  id INTEGER PRIMARY KEY,
  juice TEXT,
  date TEXT,
  student_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id)
);`;
///////////////////////////////////////////////////////////////////////////
`
A many-to-many relationship accurately describes itself -
two entities are connected such that an entity of ONE type connects to
ONE OR MORE (a.k.a. MANY) entities of another type AND ONE entity of the
second type connects to ONE OR MORE (a.k.a. MANY) entities of the first
type.
one-a-to-many-b + one-b-to-many-a = many-a-to-many-b

Consider students attending elementary school. Each student will study
more than one subject. Also, each subject will be studied by more than
one student.

One student => Many subjects
One subject => Many students
When combined, this means many students are related to many subjects,
a.k.a. a many-to-many relationship between students and subjects.
`;
///////////////////////////////////////////////////////////////////////////
`
Here is a small portion of the data in the students table:

ID	NAME
1	Alim
2	Andrei
3	Belma
Here are a few records from the subjects table:

ID	NAME
101	Reading
102	Writing
103	Arithmetic
104	Art
105	Music
Here are all the combinations of students taking subjects:

STUDENT ID	STUDENT NAME	STUDENT_ID	SUBJECT_ID	SUBJECT ID	SUBJECT NAME
1	Alim	1	101	101	Reading
1	Alim	1	102	102	Writing
1	Alim	1	103	103	Arithmetic
1	Alim	1	104	104	Art
2	Andrei	2	101	101	Reading
2	Andrei	2	102	102	Writing
2	Andrei	2	103	103	Arithmetic
2	Andrei	2	105	105	Music
3	Belma	3	101	101	Reading
3	Belma	3	102	102	Writing
3	Belma	3	103	103	Arithmetic
3	Belma	3	104	104	Art
And here is another view for these combinations.

Note: the subject_id and student_id columns have been reversed
to improve readability, and because it doesn't matter - just like
rearranging columns in Microsoft Excel or Google Sheets.

SUBJECT ID	SUBJECT NAME	SUBJECT_ID	STUDENT_ID	STUDENT ID	STUDENT NAME
101	Reading	101	1	1	Alim
102	Writing	102	1	1	Alim
103	Arithmetic	103	1	1	Alim
104	Art	104	1	1	Alim
101	Reading	101	2	2	Andrei
102	Writing	102	2	2	Andrei
103	Arithmetic	103	2	2	Andrei
105	Music	105	2	2	Andrei
101	Reading	101	3	3	Belma
102	Writing	102	3	3	Belma
103	Arithmetic	103	3	3	Belma
104	Art	104	3	3	Belma
`;
///////////////////////////////////////////////////////////////////////////
`
Schema for the abbreviated students and subjects tables in this example:

COLUMN	TYPE	CONSTRAINTS
id	INTEGER	PRIMARY KEY
name	TEXT

Schema for student-subject join table:

COLUMN	TYPE	CONSTRAINTS
student_id	INTEGER	FOREIGN KEY REFERENCES students(id)
subject_id	INTEGER	FOREIGN KEY REFERENCES subjects(id)

Represented visually in a schema diagram a many-to-many relationship can
be easy to spot because the join table sits between two connector lines.
When the two connector lines are labelled with 1 and * on opposite ends,
this leads to * to * - meaning "many" to "many" - between the two entity
tables.
`;
///////////////////////////////////////////////////////////////////////////
`The following code shows how to create these tables with the
many-to-many relationship in SQLite3.

CREATE TABLE students (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE subjects (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE student_subject (
  student_id INTEGER,
  subject_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id)
  FOREIGN KEY (subject_id) REFERENCES subjects(id)
);` ///////////////////////////////////////////////////////////////////////////
`In a many-to-many relationship, multiple records in Table A are
associated with multiple records in Table B. You would normally
create a third table for this relationship called a join table,
which contains the primary keys from both tables.
A join table table is a table that sits between the other tables in a
many-to-many relationship. It stores a record of each of the foreign keys
of the other tables. Which is used to reference the data from the other
tables. Overall, a join table provides a more developed data structure.
`;
///////////////////////////////////////////////////////////////////////////
`Products

ID	NAME
1597	Glass Coffee Mug
1598	Metallic Coffee Mug
1599	Smart Coffee Mug
Users

ID	NAME
1	Alice
2	Bob
Orders

ID	PURCHASER_ID
10	1
11	1
12	2
Order Details

ID	ORDER_ID	PRODUCT_ID
1	10	1599
2	11	1597
3	11	1598
4	12	1597
5	12	1598
6	12	1599

Take a moment to analyze the data above. Using the foreign keys,
you should be able to reason out that "Alice" has two orders.
One order containing a "Smart Coffee Mug" and another order
containing both a "Glass Coffee Mug" and "Metallic Coffee Mug".
Bob had one order containing three items, one of each mug.
`;
///////////////////////////////////////////////////////////////////////////
`Stages of Relational Database Design`;
`1. Define database purpose and entities
For example, if you were creating a database for order processing on an
e-commerce application, you would need a database with at least three
tables: a products table, an orders tables, and a users (i.e. customers)
table. You can reason that a product will probably have an ID, name, and
price, and an order will contain one or more product IDs. Also, each user
can place multiple orders.

2. Identify primary keys
The second stage is to identify the primary key (PK) of each table.
As we previously learned, a table’s primary key contains a unique value
or values, that identifies each distinct record. For our above example of
online orders, we would probably create IDs to serve as the primary key for
each table: a product ID, an order ID, and a user ID.

3. Establish table relationships
The third stage is to establish the relationships among the tables in the
database. There are three types of relational database table relationships:

One-to-one
One-to-many
Many-to-many
In this reading, you will be focusing on the one-to-many relationship.
A one-to-one relationship is a simple form of one-to-many. Designing
many-to-many relationships will be covered in the next reading.

One-to-many relationship

In a one-to-many relationship, each record in Table A is associated with
multiple records in Table B. Each record in Table B is associated with only
one record in Table A. This is achieved by utilizing the primary key and
foreign key. The foreign key in Table B references the primary key of Table A.

The above schema depicts a one-to-many relationship between the
users table and the orders table: One user can create multiple orders.

The primary key of the users table (id) is a foreign key in the
orders table (purchaser_id). This allows the foreign key (purchaser_id)
in the orders table to reference the users table (id) to identify
which user made each order.

This table relationship would produce the following example data
(not all columns are included):
Users

ID	NAME
1	Alice
2	Bob
Orders

ID	PURCHASER_ID
10	1
11	1
12	2

Take a moment to analyze the data above. Using the foreign keys, you should
be able to reason out that "Alice" has made two orders and "Bob" has made
one order.

4. Apply normalization rules
The fourth stage in RDD is normalization. Normalization is the
process of optimizing the database structure so that redundancy and
confusion are eliminated.

The rules of normalization are called “normal forms” and are as follows:

First normal form
Second normal form
Third normal form
Boyce-Codd normal form
Fifth normal form
The first three forms are widely used in practice, while the
fourth and fifth are less often used.

First normal form rules:

Eliminate repeating groups in individual tables.
Create a separate table for each set of related data.
Identify each set of related data with a primary key.
Second normal form rules:

Create separate tables for sets of values that apply to multiple records.
Relate these tables with a foreign key.
Third normal form rules:

Eliminate fields that do not depend on the table's key.
`;
///////////////////////////////////////////////////////////////////////////
/*SQL Commands*/

`CREATE/DROP Tables
Names of tables should be in snake_case and should not create spaces or
dashes.They should contain only lower case letters, numbers, and
underscores.
Writing the SQL
Creating a table with SQL has this general syntax.

CREATE TABLE «table name» (
  «column name» «data type»,
  «column name» «data type»,
  ...
  «column name» «data type»
);

Example-
COLUMN	JS DATA TYPE	MAX LENGTH	ANSI SQL DATA TYPE
id	integer		INTEGER PRIMARY KEY
name	string	50	VARCHAR(50)
age_yrs	number	3 digits, 1 decimal	NUMERIC(3,1)
breed	string	100	VARCHAR(100)
weight_lbs	number		INTEGER
microchipped	Boolean		BOOLEAN


CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);
Execute the statement:

DROP TABLE puppies;
to delete the puppies table.

Note that dropping tables is a dangerous operation as it deletes all
the data in the table with it. Exercise extreme caution when using DROP
TABLE statements within production code.

Inserting Data
First, open up SQLite and create a new table named friends with the
following column specifications:

NAME	DATA TYPE	CONSTRAINTS
id	INTEGER	PRIMARY KEY AUTOINCREMENT
first_name	VARCHAR(255)	NOT NULL
last_name	VARCHAR(255)	NOT NULL

Use the SQL below to create the above table:

CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);
Inserting data into the example table
Now, you need to add table rows with some data. You can insert a new table
row using the following syntax:

INSERT INTO table_name
VALUES
  (column1_value, column2_value, column3_value);
Fill out the friends table with information about five friends.
In SQLite, enter the following to add new table rows.

INSERT INTO friends (id, first_name, last_name)
VALUES
  (1, 'Amy', 'Pond');
  Note the use of single quotation marks for string values. Also note that,
  with the AUTOINCREMENT constraint on id you don't need to specify the
  value when inserting. SQLite will start at 1 and increment it every time
  you add a new row. You can choose to specify it and SQLite will continue
  incrementing from the last row's id.

You can also use the "multiple values" insert.

  INSERT INTO friends (first_name, last_name)
VALUES
  ('Rose', 'Tyler'),
  ('Martha', 'Jones'),
  ('Donna', 'Noble'),
  ('River', 'Song');

  Using the previous example, if you try inserting a new row with an id of 5, you will get an error:

INSERT INTO friends (id, first_name, last_name)
VALUES (5, 'Jenny', 'Who');
Because id is a primary key and that id is already taken, you should
get a message in SQLite that it already exists:
Error: UNIQUE constraint failed: friends.id
  `;
///////////////////////////////////////////////////////////////////////////
`Recall, SQL stands for Structured Query Language, and whenever you write
SQL you're usually querying a database. A query is simply a question you're
asking a database, and you're aiming to get a response back. The response
comes back to you as a list of table rows.

Simple SELECT Query
You can write a simple SELECT query to get results back from a desired SQL
table. The syntax for the SELECT query is SELECT [columns] FROM [table];
where [columns] are the desired column names from the table separated
by commas.

puppies table:

ID	NAME	AGE_YRS	BREED	WEIGHT_LBS	MICROCHIPPED
1	Cooper	1	Miniature Schnauzer	18	1
2	Indie	0.5	Yorkshire Terrier	13	1
3	Kota	0.7	Australian Shepherd	26	0
4	Zoe	0.8	Korean Jindo	32	1
5	Charley	1.5	Basset Hound	25	0
6	Ladybird	0.6	Labradoodle	20	1
7	Callie	0.9	Corgi	16	0
8	Jaxson	0.4	Beagle	19	1
9	Leinni	1	Miniature Schnauzer	25	1
10	Max	1.6	German Shepherd	65	0

Example table set up
Open SQLite3 in your terminal, create the puppies table, and
insert the rows using the following:

CREATE TABLE puppies (
  id INTEGER,
  name VARCHAR(100),
  age_yrs DECIMAL(2,1),
  breed VARCHAR(100),
  weight_lbs INT,
  microchipped BOOLEAN
);

INSERT INTO puppies
VALUES
  (1, 'Cooper', 1, 'Miniature Schnauzer', 18, 1),
  (2, 'Indie', 0.5, 'Yorkshire Terrier', 13, 1),
  (3, 'Kota', 0.7, 'Australian Shepherd', 26, 0),
  (4, 'Zoe', 0.8, 'Korean Jindo', 32, 1),
  (5, 'Charley', 1.5, 'Basset Hound', 25, 0),
  (6, 'Ladybird', 0.6, 'Labradoodle', 20, 1),
  (7, 'Callie', 0.9, 'Corgi', 16, 0),
  (8, 'Jaxson', 0.4, 'Beagle', 19, 1),
  (9, 'Leinni', 1, 'Miniature Schnauzer', 25, 1),
  (10, 'Max', 1.6, 'German Shepherd', 65, 0);

  SELECT specific columns
If you wanted to see just the name, age_yrs, and weight_lbs columns
from the table, you could use the query:

SELECT name, age_yrs, weight_lbs FROM puppies;

This query will give you:

NAME	AGE_YRS	WEIGHT_LBS
Cooper	1	18
Indie	0.5	13
Kota	0.7	26
Zoe	0.8	32
Charley	1.5	25
Ladybird	0.6	20
Callie	0.9	16
Jaxson	0.4	19
Leinni	1	25
Max	1.6	65
Using SELECT * is a quick way to get back all the columns in a given table.
It is discouraged in queries that you write for your applications. Use it
only when playing around with data, not for production code.

SELECT * FROM puppies;
This will give you the original table with all columns and rows.
///////////////////////////////////////////////////////////////////////////
WHERE clause for a single value
The simplest WHERE clause finds a row by a single column value.
The query below finds the entry that has an id of 5:

SELECT * FROM puppies
  WHERE id = 5;
Note that string values MUST use single quotation marks.

You should get the following result:

ID	NAME	AGE_YRS	BREED	WEIGHT_LBS	MICROCHIPPED
5	Charley	1.5	Basset Hound	25	no`;
///////////////////////////////////////////////////////////////////////////
`DELETE statements have the following syntax: DELETE FROM [table] WHERE
[condition];
DELETE FROM puppies
  WHERE microchipped = 0;
  SELECT * FROM puppies;
You would get the following result:

NAME	AGE_YRS	BREED	WEIGHT_LBS	MICROCHIPPED
Cooper	1	Miniature Schnauzer	18	1
Indie	0.5	Yorkshire Terrier	13	1
Zoe	0.8	Korean Jindo	32	1
Ladybird	0.6	Labradoodle	20	1
Jaxson	0.4	Beagle	19	1
Leinni	1	Miniature Schnauzer	25	1
  `;
///////////////////////////////////////////////////////////////////////////
`
First, you'll need a database table. Consider one with these specifications:

NAME	DATA TYPE	CONSTRAINTS
id	INTEGER	PRIMARY KEY AUTOINCREMENT
first_name	VARCHAR(255)	NOT NULL
last_name	VARCHAR(255)	NOT NULL
This table can be created with this SQL statement:

CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);
Second, the table should be populated with data like this:

ID	FIRST_NAME	LAST_NAME
1	Amy	Pond
2	Rose	Tyler
3	Martha	Jones
4	Donna	Noble
5	River	Song
This data can be inserted using the following SQL statement:

INSERT INTO friends (first_name, last_name)
VALUES
('Amy', 'Pond'),
('Rose', 'Tyler'),
('Martha', 'Jones'),
('Donna', 'Noble'),
('River', 'Song');
Updating a row in a database table
In order to update data in a database, you'll need to specify:

The table to UPDATE
Which column to SET with the new value to set it too
WHERE to find the row to update.
Imagine your friend Amy Pond gets married to Sam Blue.
Now, you need to update her last name.

UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Amy' AND last_name = 'Pond';
It is a good practice to verify each UPDATE after you run it:

SELECT * FROM friends;
If no rows match the WHERE statement, the UPDATE will fail silently.
This means there is no error message, and the table is unchanged.
Sometimes, you will receive an error when updating data.

For example, if you try to modify a column with a UNIQUE constraint.

# BAD - DO NOT DO THIS!
UPDATE friends
SET id = 2
WHERE id = 1;
Because id is a primary key and the new value for the id is already taken,
you will see a message in SQLite that it already exists:

Error: UNIQUE constraint failed: friends.id`;
///////////////////////////////////////////////////////////////////////////
//SQL and Express
`Begin with Express boilerplate

// Instantiate Express and the application
const express = require('express');
const app = express();

// Process environment variables
require('dotenv').config();

// Instantiate database here
// ...

// Express using json
app.use(express.json());

// Routes will go here
// ...

// Set port and listen for incoming requests
const port = 5000;
app.listen(5000, () => console.log('Server is listening on port', port));
To connect to a SQLite3 database, you can use the sqlite3 package.
Install it by running npm install sqlite3 in your Terminal.

In the Express application code near the beginning of the file,
place the setup code for the database constants. It should be BEFORE
any Express middleware.

// Instantiate SQLite and database
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database(
    process.env.data_source,
    sqlite3.OPEN_READWRITE
);

Tip: Using a constant for the database name, if used, should only be a
temporary part of the code. Environment variables are the right place to
put database connection information (e.g. process.env.data_source).
It is a best practice to limit the Express server permissions on the database.
Using sqlite3.OPEN_READWRITE means that the Express server can read and write
to the database (that is, SELECT, INSERT, UPDATE, and DELETE).
However, it will NOT be able to CREATE or DROP tables.
///////////////////////////////////////////////////////////////////////////
Query for all records
The most basic SQL statement is a simple SELECT. It is useful to begin
with one to ensure the connection to the database is fully operational.

Define a route.

app.get('/trees', (req, res, next) => {
    // route handling goes here
));
Inside the route handler, query the database.

const sql = 'SELECT * FROM trees';
const params = [];

db.all(sql, params, (err, rows) => {
    // response handling goes here
});
The first argument in any of the database callback functions is err
which holds the error, if any, and the second parameter is the result
of the function call.

When using db.all(), the result is an array of rows.

Finish the route handler by responding with the rows in a json response
format.

app.get('/trees', (req, res, next) => {
    const sql = 'SELECT id, name FROM trees';
    const params = [];

    db.all(sql, params, (err, rows) => {
          res.json(rows);
    });
});
Following these best practices, a route to return all records in a database
table looks like this:

app.get('/trees', (req, res, next) => {
    const sql = 'SELECT id, name FROM trees';
    const params = [];

    db.all(sql, params, (err, rows) => {
        if (err) {
            next(err);
        } else {
            res.json(rows);
        }
    });
});

The query for 1 row looks quite similar. Notice the function is different
(db.all() for all records, and db.get() for one record). Also, you'll see
there is a question mark (?) in the SQL statement where a dynamic value needs
to go. In a route handler, the value usually comes as part of the route's
path so will be in req.params.

Here's a complete example with the route handler, SQL statement, params,
database query and response handling.

app.get('/trees/:id', (req, res, next) => {
    const sql = 'SELECT * FROM trees WHERE id = ?';
    const params = [req.params.id];

    db.get(sql, params, (err, row) => {
        if (err) {
          next(err);
        } else {
          res.json(row);
        }
    });
});

Running other SQL statements, like INSERT, DELETE and UPDATE follow a similar
pattern:

Constant for the SQL statement, with ? where dynamic values need to go
Constant array for the params to substitute for each ? in the same order
as the ?'s in the SQL constant
Calling the appropriate database function with the SQL statement, params,
and result handler function
For non-SELECT statements, db.run() is the database function to use.
The response handler function will pass through an error (err) if something
goes wrong.

Here's an example - notice the 4 question marks (?) match the 4 params.

app.post('/trees', (req, res, next) => {
   const sql = `//      INSERT INTO trees (tree, location, height_ft, ground_circumference_ft)
//      VALUES (?, ?, ?, ?);
`;
    const params = [
        req.body.name,
        req.body.location,
        req.body.height,
        req.body.size
    ];

    db.run(sql, params, (err) => {
        if (err) {
            next(err);
        } else {
            res.json({
                message: 'success'
            });
        }
    });
});
There are three common functions used to access the database:

db.all() for retrieving multiple rows from a table
db.get() for retrieving one row from a table
db.run() for executing SQL statements which modify data in a table
`;
///////////////////////////////////////////////////////////////////////////
`Intermediate SQL

WHERE clause for a list of values
You can also add a WHERE clause to check for a list of values.
The syntax is WHERE [column] IN ('value1', 'value2', 'value3').
Let's say you wanted to find the name and breed of the puppies who
are Corgis, Beagles, or Yorkshire Terriers. You could do so with
the query below:

SELECT name, breed FROM puppies
  WHERE breed IN ('Corgi', 'Beagle', 'Yorkshire Terrier');
Running this query should yield the following results:

NAME	BREED
Indie	Yorkshire Terrier
Callie	Corgi
Jaxson	Beagle

WHERE clause for a range of values
SELECT name, breed, age_yrs FROM puppies
  WHERE age_yrs BETWEEN 0 AND 0.5;
Entering this query should yield the following results:

NAME	BREED	AGE_YRS
Indie	Yorkshire Terrier	0.5
Jaxson	Beagle	0.4

ORDER BY
Getting the values back from a database in any order it wants to give
them to you is ludicrous. Instead, you will often want to specify the
order in which you get them back. Say you wanted them in alphabetical
order by their name. Then, you would write

SELECT name, breed
  FROM puppies
  ORDER BY name;
Say you wanted that returned from oldest dog to youngest dog. You would
write

SELECT name, breed
  FROM puppies
  ORDER BY age_yrs DESC;
where DESC means in descending order. Note that the column that you order
on does not have to appear in the column list of the SELECT statement.

LIMIT and OFFSET
Say your query would return one million rows because you've cataloged every
puppy in the world. That would be a lot for any application to handle.
Instead, you may want to limit the number of rows returned. You can do
that with the LIMIT keyword.

SELECT name, breed
  FROM puppies
  ORDER BY age_yrs
  LIMIT 100;
That would return the name and breed of the 100 youngest puppies. (Why?)
That is, of the million rows that the statement would find, it limits the
number to only 100.

Let's say you want to see the next 100 puppies after the first hundred.
You can do that with the OFFSET keyword which comes after the LIMIT clause.

SELECT name, breed
  FROM puppies
  ORDER BY age_yrs
  LIMIT 100 OFFSET 100;
That will return only rows 101 - 200 of the result set. It limits the
total number of records to return to 100. Then, it starts at the 100th
row and counts 100 records. Those are the records returned.`;
///////////////////////////////////////////////////////////////////////////
`
SQL Operators
A SQL operator is a word or character that is used inside a WHERE clause
to perform comparisons or arithmetic operations. In previous examples, you
used SQL operators inside of WHERE clauses to filter table rows -- =, IN,
BETWEEN, and AND.

Logical operators

OPERATOR	DESCRIPTION
[ALL]	TRUE if all of the subquery values meet the condition.
[AND]	TRUE if all the conditions separated by AND are TRUE.
[ANY]	TRUE if any of the subquery values meet the condition.
[BETWEEN]	TRUE if the operand is within the range of comparisons.
[EXISTS]	TRUE if the subquery returns one or more records.
[IN]	TRUE if the operand is equal to one of a list of expressions.
[LIKE]	TRUE if the operand matches a pattern (accepts "wildcards").
[NOT]	Displays a record if the condition(s) is NOT TRUE.
[OR]	TRUE if any of the conditions separated by OR is TRUE.
[SOME]	TRUE if any of the subquery values meet the condition.

Here is another example query with a WHERE clause using several logical
operators: NOT, IN, AND, and LIKE.

SELECT name, breed FROM puppies
  WHERE breed NOT IN ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle')
    AND breed NOT LIKE '%Shepherd';
Note: Pay attention to that LIKE operator. You will use it more than you
want to. The wildcard it uses is the percent sign. Here's a table to help you understand.

LIKE	MATCHES "DOG"	MATCHES "HOTDOG"	MATCHES "DOG-TIRED"	MATCHES "ORDOGORDO"
'dog'	yes	no	no	no
'%dog'	yes	yes	no	no
'dog%'	yes	no	yes	no
'%dog%'	yes	yes	yes	yes


Arithmetic operators
OPERATOR	MEANING	SYNTAX
+	Addition	a + b
-	Subtraction	a - b
*	Multiplication	a * b
/	Division	a / b
%	Modulus (returns remainder)	a % b
Here is an example query with a WHERE clause using the
multiplication operator to find puppies that are 6 months old:

SELECT name, breed, age_yrs FROM puppies
  WHERE age_yrs * 10 = 6;

  Comparison operators
OPERATOR	MEANING	SYNTAX
=	Equals	a = b
!=	Not equal to	a != b
<>	Not equal to	a <> b
>	Greater than	a > b
<	Less than	a < b
>=	Greater than or equal to	a >= b
<=	Less than or equal to	a <= b
!<	Not less than	a !< b
!>	Not greater than	a !> b
Here is an example query with a WHERE clause using the > comparison operator:

SELECT name, breed, weight_lbs FROM puppies
  WHERE weight_lbs > 50;
///////////////////////////////////////////////////////////////////////////
If you wanted to use multiple clauses in a single SELECT statement,
the order by which you write them matters. For example, using ORDER BY
before your WHERE clause would make no sense. The WHERE clause is filtering
your results so ordering them should come after as ordering your data before
filtering doesn't do anything.

Here's an example of a query that uses all the clauses:

SELECT column1, column2
FROM table
  WHERE constraint_expression
  ORDER BY column ASC/DESC
  LIMIT num OFFSET num;
   the results should first go through the WHERE filter.
  The 2 remaining clauses depend on the filtered result. Similarly,
  ORDER BY should come next, as using LIMIT before could result in lost data.
`;