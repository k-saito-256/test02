var express = require('express');


var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){    
    res.render('hello.ejs');   
});

var server = app.listen(process.env.PORT || 3000, 
                        process.env.IP || "0.0.0.0", function () {
        var host = server.address().address
        var port = server.address().port
        console.log('Example app listening at http://%s:%s', host, port)
});



