const express = require("express"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override");

const app = express();
const PORT = process.env.PORT || 3001;

// Make Public folder accessible to app
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + "/public"));

// Configure Body-Parser
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
const exphbs = require("express-handlebars");

// Configure Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Require Routing file
require('./controllers/burgertime_controller')(app);

// Start server listening
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});
