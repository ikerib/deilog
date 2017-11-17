
var fs = require('fs'),
    configPath = './config.json';
var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));

var ami = new require('asterisk-manager')(parsed.PORT,parsed.SERVER,parsed.USERNAME,parsed.PASSWORD, true);
var open = require("open");

ami.keepConnected();

ami.on('bridge', function(evt) {
    if ( (evt.callerid1 === parsed.EXTENSION) || (evt.callerid2 === parsed.EXTENSION) ) {
        console.log(evt);
        open("http://www.pasaia.eus");
    }

});