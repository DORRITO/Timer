var express = require("express");
//create app
var app = express();
const PORT = process.env.PORT || 8000;

app.use(function(req, res, next) {
    //is traffitc https?
    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});

app.use(express.static('public'));

app.listen(PORT, function() {
    console.log("express server is up on port " + PORT);
});