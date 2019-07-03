var express = require('express');

var controllerNameRegister = require('./libs/assist/controllersNameRegister');

var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// app.set('port', process.env.PORT || 3000);
app.set('port', 80);

app.use(express.static('./public'));

// app.use(require('body-parser')());
var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({
    extended: true
  }));
app.use(bodyParser.json());

var session = require("express-session");
app.use(session({
    secret: 'zifeiyIsVeryHandsome',
    resave: true,
    saveUninitialized: true
}));

controllerNameRegister.handle(app);

// 定制404页面
app.use(function (req, res) {
    res.status(404);
    res.render("404");
});

// 定制500界面
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render("500");
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});