const express = require('express');
const app = express();

app.enable('trust proxy');

app.get('/whoami', function(req, res) {
    let IP = req.connection.remoteAddress;
    let ip = req.ip;

    let language = req.headers['accept-language'];
    language = language.slice(0, language.indexOf(','));

    let user = req.headers['user-agent'];
    user = user.slice(user.indexOf('(') + 1 , user.indexOf(')'));

    let json = {
        ipAddress: ip,
        language: language,
        software: user
    }
    
    res.json(json);
})

app.listen(3000, function() {
    console.log('Server is running 3000');
})
