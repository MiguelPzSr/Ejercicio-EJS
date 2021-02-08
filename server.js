var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sira', owner: "Miguel", birth_year: 2009},
        { name: 'Hercules', owner: "Pedro", birth_year: 2011},
        { name: 'Goliath', owner: "Lorena", birth_year: 2016}
    ];
    var tagline = "We love our pets, any problem?";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

app.get('/about', function(req, res){
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 port conected');