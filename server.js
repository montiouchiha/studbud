const express = require('express');
const app = express();
app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
    
    //const parsedUrl = new URL(req.url, 'https://domainname.com)

    //let pathName = parsedUrl.pathname

    //let ext = path.extname(pathName)

    //if (pathName !== '/' && pathName[pathName.length - 1] === '/') {
        //res.writeHead(302, {'Location': pathName.slice(0, -1)})
        //res.end()
    //}

    //if (pathName === '/') {
        //ext = '.html'
        //pathName = '/index.html'
    //} else if (!ext) {
        //ext = '.html'
        //pathName += ext
    //}
    //})
    res.sendFile(__dirname + '/dist/index.html')
});

let server = app.listen(8888, function(){
    console.log("App server is running on port 8888");
});