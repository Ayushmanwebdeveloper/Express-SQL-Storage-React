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
const data = {
    firstName: 'John',
    lastName: 'Adams'
};

fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data);
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
