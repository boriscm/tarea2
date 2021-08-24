'use strict'

const { url } = require('inspector')

var http = require('http').createServer(webServer),
    path = require('path'),
    urls = [
        {
            route: '',
            output: '<h2>Home</h2>'
        },
        {
            route: 'cliente',
            output: '<h2>Cliente</h2>'
        },
        {
            route: 'proveedor',
            output: '<h2>proveedor</h2>'
        }

    ]


function webServer(req, res){
    var message = '',
        pathURL = path.basename(req.url)

    console.log(pathURL)

    urls.forEach( function (pos) {
        if(pos.route == pathURL){
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(message + pos.output)
        }
    })

    if(!res.finished){
        res.writeHead(200,{'Content-Type':'text/html'})
            res.end('<h1> Error 404</h1>')
    }
}

http.listen(3000)
console.log('servidor corriendo http://localhost:3000/');
