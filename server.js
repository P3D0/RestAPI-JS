const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//panggil routes
let routes = require('./routes');
routes(app);

app.listen(3000, (req, res) => {
    console.log(`Server started on port`);
});