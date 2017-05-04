# EXPRESS

Express is a cool NodeJS framework to quickly bootstrap a web app or a web API. But how easy is it actually? Let's dive right in with some Express apis.

# Get APIs

To make an API, you first need to require the Express router:

```javascript
var express = require('express');
var router = express.Router();
```

Then, the router object allows you to declare apis with the standard HTTP verbs, `get` `post` `put` and `delete`. Here is a GET request

```javascript
router.get('/path', function(req, res) {

});
```

* The `req` object represents the **request**, and has a bunch of info on the users' request. Most importantly, you will want to take a look at `req.body`, but that's for an other lesson ;)
* The `res` object is your response. If you want to return a JS object, in the case of an API, you will use the `send` method:

```javascript
res.send({
  didItWork: 'yes'
});

```

About the path of the query, you can add parameters to make your API more dynamic, by adding a colon before the name of the variable you want

```javascript
router.get('/path:myParameter', function(req, res) {
  ...
});
```

The variable will then be available under `req.params.myParameter`

## Let's try it out!

Here's an API that I started out for you. It's supposed to return content of a user database (a simple static file). Being really lazy, I left out one of the APIs blank and you will have to fill it for me.

@[Fill out the API]({"stubs": ["routes/get.js"], "command": "/bin/bash run.sh test"})

Feeling lazy? How about you...

@[Check out the solution]({"stubs": ["blank"], "command": "/bin/bash showSolution.sh get"})
