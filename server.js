'use strict';

let express = require('express');
let app = express();
let methodOverride = require('method-override');


app.use(express.static('src'));
app.use(methodOverride('X-HTTP-Method-Override'));
/**
 * Applications --------------------------------
 * */
app.use('/*', function(req, res) {
    res.sendFile(__dirname + 'src/index.html');
});


app.listen(8282);
console.log("App listening on port 8282");
exports = module.exports = app;
