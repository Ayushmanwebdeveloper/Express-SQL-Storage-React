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
///////////////////////////////////////////////////////////////////////////
`
One-to-many
Imagine two tables - puppies and owners. Each puppy is owned by one person.
Each person can own multiple puppies.

To set up the puppies table to have a relationship with another table,
there should be a primary key column and at least one foreign key column.
In this example, the foreign key will connect to the primary key in the
owners table for which each puppy has an owner. In other words, the create
table statement for the puppies table should include a primary key (id),
and a foreign key (owner_id).

The resulting CREATE statement should look like the following:

CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN DEFAULT 0,
  owner_id INTEGER FOREIGN KEY
);
The owner_id column should refer to a corresponding id-type column in
the owners table.

CREATE TABLE owners (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
///////////////////////////////////////////////////////////////////////////
Many-to-many (join table)
Next, imagine people are adopting elephants at the zoo to help with their
care and feeding. Each elephant needs a lot of support, so multiple people
will need to help each elephant. Additionally, each person could choose to
help multiple elephants.

The people and elephants table are "basic" data tables.

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);
CREATE TABLE elephants (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  age INTEGER
);
Notice that both tables have primary keys, and neither has foreign keys.
Instead, the foreign keys will go together into a join table.

CREATE TABLE people_elephants (
  person_id INTEGER FOREIGN KEY NOT NULL,
  elephant_id INTEGER FOREIGN KEY NOT NULL
);
There is not a need for a separate primary key in the join table because
it will never be queried directly in that way. Instead, it will be queried
by either the person_id or the elephant_id, or it will be used in a JOIN
clause within a SELECT statement.

///////////////////////////////////////////////////////////////////////////
The DELETE CASCADE statement
DELETE CASCADE statement use the following syntax:

ALTER TABLE dbo.T2
   ADD CONSTRAINT FK_T1_T2_Cascade
   FOREIGN KEY (EmployeeID) REFERENCES dbo.T1(EmployeeID) ON DELETE CASCADE

  You can see that the statement makes use of the ADD CONSTRAINT,
  FOREIGN KEY REFERENCES AND ON DELETE CASCADE clause to find which
  referenced table would be deleted. If a record in Table 1 (T1) is deleted,
  all associated records in Table 2 (T2) also get deleted.

 DELETE CASCADE in an example table
Say you have an Employee table and Review table:

Employee table:

NAME	EMPLOYEE_ID	DEPARTMENT
Cooper	1	Accounting
Indie	2	HR
Kota	3	Project Manager
Review table:

EMPLOYEE_ID	REVIEW
1	2020
1	2021
2	2021
3	2021
Once you delete an employee, all of the review records associated with
that employee should be deleted too. For example, if you deleted Cooper,
then the reviews related to this Employee_ID would we deleted due to the
effects of DELETE CASCADE.

Giving you the following results:

Employee table:

NAME	EMPLOYEE_ID	DEPARTMENT
Indie	2	HR
Kota	3	Project Manager
Review table:

EMPLOYEE_ID	REVIEW
2	2021
3	2021
The DELETE CASCADE condition will allow you to delete data on the parent
table and any referencing data in the child tables in one command.
This makes keeping track of data easier and more organized as your data
grows. Instead of going through each table and individually deleting data
the DELETE CASCADE statement will do most of the work for you.`;
///////////////////////////////////////////////////////////////////////////
`An ORM, or Object Relational Mapping, is a technique or a library that
allows you to map objects to rows in a database table. This allows you
to work with your data without using SQL, and helps you to keep your data
valid and secure.
You can think of the ORM as the bridge between your object-oriented
JavaScript code and your database. Using the ORM, you can use JavaScript
methods to construct an instance of a new book and save it directly into
the database. The ORM will translate your JavaScript code into SQL commands,
run them, and insert the new book record as a new row in the database table
based on the attributes of the book instance that you created. Similarly,
the ORM allows you to access and manipulate data using JavaScript to read,
update, and delete database records as well.

Sequelize is a JavaScript-based Object Relational Mapping (ORM) library that
you will be using within your Express applications. In this reading,
you will explore the three main elements that make up Sequelize:

Describe a model and what it represents
Describe a migration and how it relates to a model
Describe a seed
Explain how models, migrations, and seeds work together in the ORM

A model is a representation of data written into your code. Specifically,
a model can be thought of as a "blueprint" for the data that is contained
within a table in the database. In Sequelize, a model is a JavaScript class.
Therefore, it has a name, as well as various properties (or attributes) which
can be assigned values of a specific defined data type. As with other
JavaScript classes, you can construct instances of the model. A model
can include methods which can be called on an instance of the model,
or the model (class) itself.

The table below illustrates how a few aspects of a Book model in Sequelize
map to a database table, Books.

COMPONENT OF A MODEL	=>	COMPONENT OF THE DATABASE TABLE
Class Name (Book)	=>	Table Name (Books)
Property / Attribue Names (title, series, author)	=>	Column Names (title, series, author)
Instance of the Model	=>	Row of data values (a single record in the table)

Migrations
A migration is a JavaScript file in Sequelize that defines a specific change
to a database schema. For example, if you are starting a new project, you
would run a migration to create a new database table. If you have an existing
project, you might need to run a migration to make a small change to a table,
such as adding a new column.

Seeds
In Sequelize, a piece of sample or test data is referred to as a seed.
Seeder files are data files that you can use to populate a test database
or make a change to the data that is already present. Similar to migrations,
seed data can vary in scope. You can create brand new seed data to populate
a new table, or use seed data to make a smaller update.

Example #1: You are creating an application that requires a login, so you
might create a seeder file to add a few demo users for your site.
///////////////////////////////////////////////////////////////////////////
To start using Sequelize within your Express applications, you will
first need to install the following packages:

sqlite3 - a library that implements the SQLite3 database engine
sequelize - is the actual Sequelize ORM that contains all of its features
for use within your Express server code
sequelize-cli - a wrapper to the sequelize package so that you can perform
Sequelize operations through the command-line interface instead of via a
JS script
`;
///////////////////////////////////////////////////////////////////////////
`To initialize your Sequelize database, you will need to create a
.sequelizerc file that defines where all your database dependencies are.
Specifically, you will need to define paths for the following:

Config
Models
Seeding
Migrations

For example starting with a basic Express application that looks like the
following:

├── README.md
└── server
    ├── app.js
    └── package.json
Then, to initialize Sequelize within your application, you would run the
following command within the server directory:

> npx sequelize init

This result will look like:

├── README.md
└── server
    ├── app.js
    ├── config
    │   └── config.json
    ├── migrations
    ├── models
    │   └── index.js
    ├── package.json
    └── seeders
You could imagine if your Express application begins to get more complex,
having the database files in the server directory would make the directory
harder to navigate.

In comes .sequelizerc to the rescue! By creating a .sequelizerc file as
described below, you can place all of our database files into a
separate directory called db:

// .sequelizerc

const path = require("path");

module.exports = {
  config: path.resolve("config", "database.js"),
  "models-path": path.resolve("db", "models"),
  "seeders-path": path.resolve("db", "seeders"),
  "migrations-path": path.resolve("db", "migrations"),
};
The result of running your init command will now look like:

├── README.md
└── server
    ├── app.js
    ├── config
    │   └── database.js
    ├── db
    │   ├── migrations
    │   ├── models
    │   │   └── index.js
    │   └── seeders
    ├── package-lock.json
    └── package.json
Now all the database files are within the db and config folders where they
won't crowd other Express related files in your application.

However, you will be customizing the database.js file for the configuring
of Sequelize to connect to and use: a SQLite database for development,
and a PostgresQL database for production. In development, your database.js
should look like the following:

module.exports = {
  development: {
    storage: process.env.DB_FILE,
    dialect: "sqlite",
    seederStorage: "sequelize",
    benchmark: true,
    logQueryParameters: true,
    typeValidation: true,
    // logging: false
  },
};
The storage key is instructing Sequelize where to look for the database.
This configuration is utilizing an environment variable DB_FILE which will
need to be created in the next step.

The dialect key is telling Sequelize what type of database it is connecting
to.

The seederStorage key will allow Sequelize to track which seed files have
been run in the database, allowing for easier seeding and unseeding.

The benchmark key will log the time it takes for Sequelize to execute each
query that is run.

The logQueryParameters key will log the values used as parameters in the SQL
queries that it generates. Without this key Sequelize will log the queries
with the "$1", "$2", etc., placeholders, similar to the ? seen in the SQL
queries you have previously written.

The typeValidation key will prevent values from being inserted into the
database that do not have the same type as described in the model
(integer, for instance). This enforces a model-level validation for these
data types.

Finally, the logging key in this configuration is commented out. By default
it has a value of "console.log", meaning each SQL query that is generated
and run by Sequelize will be printed to the terminal with the console.log
statement. A false is commented out here as a reminder that this
functionality can be disabled or overwritten with a different function
if desired, something which may occasionally be helpful in debugging
Express applications in order to clean up the console.
`;
///////////////////////////////////////////////////////////////////////////
// Up/Down Migrations
// The queryInterface contains two callback functions that fulfill promises.
// The first queryInterface has an up callback function with the promise to
// create a table. The second down callback drops the table.

// To insert entries into your database using the up, you will be using the
// .createTable method from the queryInterface. The first argument is the
// table name you wish to insert, followed by the second argument being an
// array of entries in the structure of plain JavaScript objects. The object
// will contain all the data types and constraints that are needed in your
// table.

// It will look something like this:

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isAlphaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        primaryKey: true,
        allowNull: false,
      }
    });
}};
// Dropping a table with queryInterface
// Dropping a table is much more simple than creating it! The down callback
// export allows you to drop a table. To insert which table you want to drop
// you use the .dropTable method from the queryInterface and it takes in an
// argument of the name of the table you wish to drop.

// It will look like this:

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('Person', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Person');
  }
};
// This will cause the table named Person and all the contents of the
// table to be dropped.

// This is an example of a table being created and dropped:

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Person');
  }
};
/*Running Migrations
Now that you have defined your up and down table migrations the next step
is to insert the tables into the database. To create or drop the table you
need to run the db:migrate command. The command is:

> npx sequelize-cli db:migrate
Once that command is executed the tables will be created or dropped and
migrated into or out of your database depending on the respective up/down
functions defined in your migration file.*/
// Undoing a Migration
// To run the down migration and undo a single migration, run the command:

// > npx sequelize-cli db:migrate:undo
// To undo all of the migrations, run the command:

// > npx sequelize-cli db:migrate:undo:all
// Lastly, to undo a specific migration, you can run the command:

// > npx sequelize-cli db:migrate:undo --name <name of migration>
// Each command has its use cases. Using db:migrate:undo will undo your last
// migration ran. The db:migrate:undo:all will undo all of the migrations that
// you have made in the entire database. However, if you only want to undo a
// specific migration without affecting all of your other migrations then
// you can run the db:migrate:undo --name <name of migration>. The name of
// the migration will also include the Xs of the migration file name, it
// would look something like this: xxxxxxxxxxxxxx-name-of-migration.
// Be careful of which migration undo command you run so you don't accidentally
// undo a migration that you didn't mean to.
///////////////////////////////////////////////////////////////////////////
// Rerunning a Migration
// When dropping a table make sure there is no table being created in your up
// migration.

// The code should look like this:

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('Person', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Person');
  }
};
// Note: Remember to the db:migrate command to execute the drop and check if
// the table has been dropped:

// > npx sequelize-cli db:migrate
// Once the table is dropped you can rerun the migration by recreating the up
// table and running the same db:migrate command. This will cause you to create
// the table again from the beginning.
///////////////////////////////////////////////////////////////////////////
// What is the difference between the up and down function in a migration
// file?

// The up function defines the change to the database schema that should
// be made, while the down function defines the logic to undo a specific
// change.
///////////////////////////////////////////////////////////////////////////
/*Step 1: Generate a migration file
In the terminal, use sequelize-cli to generate a new migration. Name
this migration create-color.

When this step is completed you should see a new file created in the
migrations directory.

Step 2: Use queryInterface to create a new table
In the migration file that was created, utilize the queryInterface to create
a new table in the up key's callback function. The name of this table should
be Colors.
Step 3: Use queryInterface to drop the table
Utilize the queryInterface to drop the table in the down key's
callback function. It is always good practice to create these corresponding
down actions as the migration is created. This will be executed whenever
undoing the migration.

Step 4: Run the migration
Use sequelize-cli to run the migration, creating the Colors table.

Step 5: Validate the table creation
Open the database with sqlite3 in the terminal.

Check which tables exist in the database with .tables. You should see the
Colors table that you defined as well as the SequelizeMeta table created
by Sequelize.*/

///////////////////////////////////////////////////////////////////////////
`
Sequelize Models
Sequelize models represent the tables in your database in an object-oriented
way. Each Sequelize model is a class in JavaScript that provides an intuitive
interface for manipulating and reading data in the table that it models.

The models class represents the entire table that it models, and an instance
of that model class can represent a single record in the table. The model
tells Sequelize information about the entity it represents such as the table
name in the database and the different data types that it consists of.

An example would look like this:

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // Helper method for defining associations.
    static associate(models) {
      // define association here
    }
  };
  User.init({
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'User' // We need to choose the model name
  });

  return User;
};
Extending the Functionality of a Sequelize Model
A Sequelize model is not limited to the default properties and methods.
In fact, you can add more properties to the model class and add custom
methods on top of the ones Sequelize provides in the model class.

That would look something like this:

class User extends Model {
  static classLevelMethod() {
    return 'foo';
  }
  instanceLevelMethod() {
    return 'bar';
  }
  getFullname() {
    return [this.firstname, this.lastname].join(' ');
  }
}
User.init({
  firstname: Sequelize.TEXT,
  lastname: Sequelize.TEXT
}, { sequelize });

console.log(User.classLevelMethod()); // 'foo'
const user = User.build({ firstname: 'Jane', lastname: 'Doe' });
console.log(user.instanceLevelMethod()); // 'bar'
console.log(user.getFullname()); // 'Jane Doe'
With the addition of custom properties and methods, Sequelize allows your
Model to implement functionality specific to your application.

Adding Validations to Models
You can even add validations to Models, ensuring data passes specific tests
before SQL is generated to save entries to the database. There will be more
on validations in the future, but this is an example of adding validations
to prevent null input, returning a custom error message:

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // Helper method for defining associations.
    static associate(models) {
      // define association here
    }
  };

  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // custom validation setting
        notNull: {
          msg: 'Please enter a first name'
          // if null sends error message
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // custom validation setting
        notNull: {
          msg: 'Please enter a last name'
          // if null sends error message
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User'
  });

  return User;
};
How to use Models
To use a model, you need to import the db/model/index.js file and destructure
the desired classes const { Model1, Model2 } = requre('db/model').

To create a new instance of a model, you use the JS class syntax for creating
a new instance of a class const instance1 = new Model1().

You can also generate a model by running the following command:

> npx sequelize-cli model:generate --name User --attributes name:string
This command allows you to create a model file in the models folder as
well as a migration file in the migrations folder. You can even add as
many attributes as you need in your model, separating each attribute and
datatype pair by a comma. The model file generated will match the name of
the model, user.js, and the migration file generated will include a timestamp
as well as a message that it created the indicated model,
YYYYMMDDHHMMSS-create-user.js.

The models file would look like this:

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of the Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
The generated migrations file looks like this:

'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};`///////////////////////////////////////////////////////////////////////////
`Performing validations on your data
Like database-level constraints, model-level validations are meant to
ensure integrity of the data being put into your database. This means
making sure that the data is in as usable of a form as possible so that
when you do need to use it, minimal additional processing is required.

These validations are run every time an attempt to insert a record through
Sequelize is made.

Examples of these might look like:

Making sure the price of a good is greater than 0.
Checking that a Tweet's length is no longer than 280 characters.
Verifying that a phone number is valid.
Model validations are different from database constraints mainly in they
can be as basic or as fine tuned and detailed as you want. Database
constraints are limited to a few key properties defined by SQL, while
model validations can take advantage of any programmatic logic you can
think of.

This isn't to say that because model validations exist that you should
forgo writing database constraints. Model-level validations will only
run when you interact with data in Sequelize, not directly through the
database. This is to say that database constraints are a kind of fail-safe
in the event that your model validations fail to catch something.
This can happen due to faulty logic in your code, or simply Sequelize
not performing validation for EVERY operation.

Set up your model to use model-level validations
The initialization of a model without validations should have the column
names as keys and its data type as its value. To apply validations to the
columns, you need to change the its value to an object with a key of type
as its data type.

For example, if a User model has a firstName column, the initialization
of the model should look like this by default:

User.init({
    firstName: Sequelize.STRING(20)
    // ...
})
Convert it to look like this so you can apply model validations to the
firstName column:

User.init({
    firstName: {
        type: Sequelize.STRING(20)
    }
    // ...
})
Applying model-level validations
In Sequelize, you can choose from an array of built-in validators, or
you can choose to write your own custom validator.

Equivalent database constraints
You can make the equivalent SQL database constraints for the column
data type, uniqueness, and allowing/disallowing null values by adding
keys onto the object for each column at model initialization.

User.init({
    firstName: {
        type: Sequelize.STRING(20), // data type
        allowNull: false,           // don't allow null values, true by default
        unique: true                // uniqueness, false by default
    }
    // ...
})
Built-in validators
The built-in validators are implemented by the validator.js library, which
offers a lot of convenient checks, for example:

User.init({
    firstName: {
        type: Sequelize.STRING(20),
        validate: {
            is: /^[a-z]+$/i,          // matches this RegExp
            isAlpha: true,            // will only allow letters
            notNull: true,            // won't allow null
        }
    }
    // ...
})
Check out the validator.js page for all the options that are available, and
the Sequelize docs for more detailed functionalities.

Custom validators
Creating your own custom validators is as simple as writing a function. The
functions won't have to return anything, but should just throw an error if
a condition is not met.

For example, a custom validator that checks if a User's first name begins
with a capital letter:

User.init({
    firstName: {
        type: Sequelize.STRING(20),
        validate: {
            // ...
            beginsWithCapital(value) {
                if(value[0] !== value[0].toUpperCase()) {
                    throw new Error("First name doesn't begin with a capital letter!");
                }
            }
        }
    }
    // ...
})
Examples of other custom validators are shown in the Sequelize docs.

Model-wide validators
Sometimes, the need for validators that check across multiple columns is
necessary. Sequelize supports validation for these cases in the second
argument of an .init call.

Using the above example of the User, say that for some reason you want
both the first and last name to begin with the letter "S", a validator
for that might look like:

User.init({
    firstName: {
        // ...
    },
    lastName: {
        // ...
    }
    // ...
}, {
    sequelize,
    validate: {
        bothBeginWithS() {
            if(this.firstName[0] !== "S" || this.lastName[0] !== "S") {
                throw new Error("Both first and last name must begin with an S!");
            }
        }
    }
})`///////////////////////////////////////////////////////////////////////////
/*Seeder files are files that contain instructions on how to seed the
database. In short, to seed a database means to insert an initial set of
data to populate the database with something.

Seeding is useful for testing your application with usable data or setting up
new production-level databases with necessary initial data quickly and
consistently.

When setting up your database, seeding happens after all the models and
initial migrations are created and performed, as it wouldn't make sense
to insert data without having the database set up.

Like migrations and models, seeder files can be generated via the
command-line interface like so:

> npx sequelize-cli seed:generate --name <name of seed>
Sometimes you will need to create multiple seeder files to populate your
database properly, specifically when you're working with multiple tables.
Generally, separating your concerns is the way to go.

Note that seeder files are typically meant to be run only once when the
database is being initialized. Errors can occur if updates to the database
schema are made in future migrations.

For example, if you created a User model that has attributes firstName and
lastName and your seeder file adds Users based on this definition. If, down
the line, you add an attribute, say middleName, to the User model that
is required, then running the seeder again may fail because the original
seeding instructions didn't specify the middleName attribute.*/
///////////////////////////////////////////////////////////////////////////
`
Creating your seeder files
After creating your seeder files by running:

> npx sequelize-cli seed:generate --name <name of seed>
you can now define how you want to seed your database. This command creates
a seeder file with the format XXXXXXXXXXXXXX-name-of-seeder.js where the Xs
represent a date.

The file will look something like this:

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
Like migrations, you have up and down exports that define how to seed and
unseed your database respectively.

Defining your Ups and Downs
Now that you've created your seed file, you'll need to define them.

Inserting seed data
To insert entries to your database via up, you will be using the .bulkInsert
method from queryInterface. The first argument is the table you want to
insert into, and the second argument is an array of the entries you want
entered in the form of plain-old JavaScript objects.

This will look something like:

await queryInterface.bulkInsert('People', [
    {
        name: 'John Doe',
    },
    {
        name: 'Jane Doe',
    }
]);
To actually execute the seed, run:

> npx sequelize-cli db:seed:all <path-to-db>
This will will run all your seed files to populate your database. If you only
want to run a specific seed file, you can instead run:

> npx sequelize-cli db:seed --seed <name of seeder>
Reverting a seed
To undo a seeding via down, you will similarly use the .bulkDelete method on
queryInterface. Like .bulkInsert, the first argument is the table name you
want the seeds removed from, but the second argument is an object
representing a WHERE clause in a SQL query. The keys of the object represent
the column you want to target, and the value is an array of the column values
you want removed.

This will look like this correspondingly to the insert:

await queryInterface.bulkDelete('People', {
      name: ['John Doe', 'Jane Doe']
});
Note that it is on you as the developer to define what to delete. Make sure
to be specific here and delete only the seed entries and not the entire
table!

See the WHERE clause reading for more details on how you can customize the
second argument to filter the deletion.

To run the down seeder and undo the seed, run the following command:

> npx sequelize-cli db:seed:undo:all
Or similarly for a specific seed only:

> npx sequelize-cli db:seed:undo --seed <name of seeder>`;
///////////////////////////////////////////////////////////////////////////
/*Find methods
In Sequelize, SELECT statements are executed by "finder" methods on your
models. The most common ones you will be using will be the findAll and
findOne methods.

Say you have a User model defined already and you've already seeded your
database with some users.

If you wanted to execute the following SQL statement:

SELECT * FROM Users;
The equivalent finder method implementation would look like:

const users = await User.findAll();
Similarly, you could use either the findOne or findAll method again with
an attributes object supplied to indicate which columns you want returned.

For example, to execute the following SQL:

SELECT firstName, lastName From Users;
The following line of code can be used to retrieve those columns:

// All instances
const users = await User.findAll({
    attributes: ['firstName', 'lastName']
});

// One instance
const user = await User.findOne({
    attributes: ['firstName', 'lastName']
});
These are just a few examples of uses of finder methods. Sequelize supports
a few other finder methods that can be used more conveniently in certain
cases, or can provide more functionalities. Check them out here.
*/
///////////////////////////////////////////////////////////////////////////
`
To insert data using SQL, you can use the following syntax:

INSERT INTO table_name
VALUES
  (column1_value, column2_value, column3_value);
For example, to insert a single record into the dogs table, you could use
the following SQL:

INSERT INTO dogs (id, dog_name, breed)
VALUES
  (3, 'Fido', 'Dalmation');
And to insert multiple records into the dogs table:

INSERT INTO dogs (id, dog_name, breed)
VALUES
  ('Fido', 'Dalmation'),
  ('Maggie', 'Golden Retriever'),
  ('Toby', 'Poodle');
Using Sequelize, you have multiple options for how you might choose to
enter this same data into your database. For the examples below, assume
that you are working with this Dog model in Sequelize, as defined below:

const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const Dog = sequelize.define("dog", {
  dogName: DataTypes.TEXT,
  breed: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});
Using build and save to persist a single record
The first option for persisting a record is to generate an instance of the
Sequelize model using Model.build. While build will generate an instance of
the model with any attributes that you assign, it does NOT persist that model
in the database. In order to do that, you must use the Instance.save method
on the instance that you already built.

For example, the code below will insert a single dog into the dogs table
using the build and save approach:

// Generate a new instance of the Dog model
const newDog = Dog.build({ dogName: "Fido", breed: "Dalmation" })

    // Check if Fido is in the database
    await Dog.findOne({ where: { dogName: "Fido" } }); // returns null

// Insert the newDog instance into the database
await newDog.save();

    // Check if Fido is in the database
    await Dog.findOne({ where: { dogName: "Fido" } }); // returns Fido's
    record
The build method generates an instance of a new dog that could be persisted
in the database. At this stage, you can call methods on it, you can assign
new attributes or re-assign attributes. But if you try to find it in the
database, it would not be found until after you call the save method on it.
You can learn more about this approach in the Sequelize documentation on
Creating an Instance.

Using create to persist a single record
The second option is to use the Model.create method, which will run a
build as well as a save to the instance you build, with a single method call.

// Create a new instance of the Dog model and save the instance to the
database
const newDog = await Dog.create({ dogName: "Fido", breed: "Dalmation" })

    // Check if Fido is in the database
    await Dog.findOne({ where: { dogName: "Fido" } }); // returns Fido's
    record
You can learn more about this approach in the Sequelize documentation on
the Create method.

Since create accomplishes the same thing as using build and then save,
why might you choose one approach over the other? The create approach is
a good choice if you are comfortable immediately persisting the record
to the database without any further manipulation. However, if you need
to manipulate the data or perform further validations before saving it
to the database, it is best to use build to generate the model, then work
with the instance of the model as needed, before using save. In many cases,
you may choose to use the two-step approach when working with user-input
data to help standardize or protect the quality of the data.

Using bulkCreate to persist multiple records at once
Just as SQL allows us to add multiple records at once, Sequelize provides
similar functionality. The bulkCreate method takes in an array of instances
to persist in the database, as well as some additional optional options.

// Create three new instances of the Dog model and save the instance
to the database
const newDog = await Dog.bulkcreate([
    { dogName: "Fido", breed: "Dalmation" },
    { dogName: "Maggie", breed: "Golden Retriever" },
    { dogName: "Toby", breed: "Poodle" }
])
    // Check if the new dogs are in the database
    const databaseDogs = await Dog.findAll(); // returns the records of all dogs
To learn more about the various options you can use with the bulkCreate
method, check the Sequelize documentation on bulkCreate. These options
allow you to specify important details such as whether a single record
or the entire insertion should fail if a validation fails, or how to deal
with duplicate records.

Common error messages when inserting data
A variety of error messages might pop up when inserting data.
You may receive an error message if a model-level validation fails
(ValidationError), or you may receive an error directly from the database
if a database-level constraint fails (such as a uniqueness constraint).

You can use the instance.validate method to run any model-level validations
on a record before saving it to the database. This will allow you to catch
the errors before triggering the SQL commands to actually insert the data
in the table. For example, if you look at the dog Model at the top of this
reading, you will notice a model-level validation that requires that the
breed is not null. The validate method can be used to manually run the
validation before saving thre record to the database. You can learn more
about this method in the Sequelize documentation on the Validate method.

// Generate a new instance of the Dog model
const newDog = Dog.build({ dogName: "Fido" })

// Validate the new dog object
await newDog.validate() // fails the validation with a
SequelizeValidationError

// Manipulate the new dog object
newDog.breed = "Dalmation"

// Validate the new dog object
await newDog.validate() // passes the validation

// Save the new dog record to the database table
await newDog.save()
`;
/*UPDATE birds
SET longitude = 81.623863
WHERE species = "Great Blue Heron"
Updating a single record
Using Sequelize, we can accomplish the same update by using a
find -> update -> save approach. First, find the record that needs
to be updated in the table, update the attribute(s) that needs to be changed,
and then save the record.

Changing a single attribute
You can do this through re-assigning the value of an attribute:

// Find the record
const greatBlueHeron = await Bird.findOne({ where: { species: "Great Blue Heron" } });

// Update the attribute through re-assigning a value
greatBlueHeron.longitude = 81.623863;

// Save the updated record
await greatBlueHeron.save();
Changing multiple attributes
Or, you can use the set method to change one or more attribute values:

// Find the record
const greatBlueHeron = await Bird.findOne({ where: { species: "Great Blue Heron" } });

// Update the attribute(s) using the set method
greatBlueHeron.set({
    longitude: 81.623863,
    latitude: 58.936047
});

// Save the updated record
await greatBlueHeron.save();
In both examples, the attributes are initally updated only in
the greatBlueHeron instance, and not in the birds table. The record in
the table is only updated after the save() method is called, and any
changed attribute on the instance will be updated in the table.

When you need more control over which attributes are updated in the
database, you can use the Instance.update method instead of the save method.
The update method will both set the new attributes on the instance as
well as save those changes in the database table.

// Find the record
const greatBlueHeron = await Bird.findOne({ where: { species: "Great Blue Heron" } });

// Update the species of the instance
greatBlueHeron.set({species: "GBH" });

// Update only the longitude and latitude in the table
greatBlueHeron.update({
    longitude: 81.623863,
    latitude: 58.936047
});
In this example, the update method only updates the latitude
and longitude values in the table. Any other change made to the instance,
such as changing the species, is not saved to the table. You can learn
more about these approaches in the Sequelize documentation on Updating
an Instance.

Updating multiple records at once
To update more than one record, you can use the Model.update method.
You call the method on the model itself, and pass in a hash of values
to be updated. The options object allows you to specify the WHERE clause
to control which records are updated.

Imagine the birds table above. You realize that the American Robin and
Belted Kingfisher were actually observed in the same location, so you
need to update the longitude and latitude for both records. You can do
so using the code below:

Bird.update(
    { latitude: 70.0000, longitude: 130.333333 }, // attributes and values to update
    { where:
        { id: { [Op.or]: [1, 2] } }  // specific records to update
    }
);
While this method does allow you to define the specific records to update,
this approach can lead to trouble if you make a mistake with the where
options. If you leave out that option, every record will be updated.
You can refer to the Sequelize documentation on update to learn about
the other options available for this method.

Updating records in seeder files
Similar to inserting data, you can use a queryInterface method to perform
a bulk update on your seed data, using the syntax pattern below:

queryInterface.bulkUpdate(table, data, options);
For more on this method, see the Sequalize documentation on bulkUpdate.
Note that similar to the queryInterface.bulkCreate method, this approach
will not run validations on every record. You can add the options
{ validate: true, individualHooks: true } to make sure that any invalid
data is caught before triggering the SQL update command.*/
//////////////////////////////////////////
`
To delete a single record or multiple records, you would use:

DELETE FROM [table] WHERE [condition]
To delete a single record, you would set the WHERE clause to the id
(or other unique identifier) of the record you want to delete.
To delete multiple records, you would craft your WHERE clause to catch
all of the records that need to be deleted. If you omit the WHERE clause, you would delete
every row in the table.

Deleting a single record using Sequelize
To delete a single record using Sequelize, you first need to find the specific record,
and then delete the instance by calling the destroy method on it. For example, imagine
the birds table from the previous lessons.

ID	SPECIES	LATITUDE	LONGITUDE
1	American Robin	66.160507	-153.369141
2	Belted Kingfisher	82.507487	-147.826054
3	Great Blue Heron	23.936047	181.623863
You realize that the data for the Great Blue Heron is incorrect and the record should
be deleted. You can do so using the following code:

// Find the record by id
const greatBlueHeron = await Bird.findOne({ where: { id: 3 } });
// Delete the record using the destroy method
await greatBlueHeron.destroy(); // the one row is removed from the table
Note: Sequelize provides many options for the Instance.destroy method. For example,
the paranoid option allows you to define whether records should be completely deleted,
or whether they should be timestamped as deleted but actually saved (as a backup) in a
different location outside of the given table. Check out the Sequelize documentation on
Instance.destroy to learn more about this advanced option.

Deleting multiple records at once
To delete multiple records using Sequelize, you take the same approach. First you need to
find the specific records to delete, and then call the destroy method on the model to complete
the deletion. You define the specific records to be destroyed within the where option.

await Bird.destroy(
    { where:
        { id: { [Op.lte]: 2 } }  // specific records to delete
    }
);
In the code above, you are deleting any record that meets the WHERE condition - in this case,
the birds with an id less than or equal to 2 (American Robin and Belted Kingfisher). As with
any delete operation, be very careful when crafting your WHERE condition, as you might
accidentally delete records that you wanted to keep. As an extra safeguard, Sequelize provides
additional options you can define to control this behavior. See the Sequelize documentation for
Model.destroy for more details.`;