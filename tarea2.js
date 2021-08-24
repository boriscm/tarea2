'use strict';

var datas;

const http = require('http').createServer(webServer);

const { default: axios } = require('axios');
const fs = require('fs');

var index = fs.createReadStream('tarea2.html');

function webServer(req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    index.pipe(res)
}

http.listen(3000,'localhost')
console.log('servidor corriendo http://localhost:3000/');



async function proveedor() {
    const url = "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json";
    let response = await axios.get(url);
    return response.data;
}

proveedor().then((data) =>{
    var cadena = "";
    for(var i = 0; i < data.length; i++)
        cadena += data[i]["idproveedor"] + "-" + data[i]["nombrecompania"] + "-" + data[i]["nombrecontacto"] + "\n";
    fs.writeFileSync("datosproveedores.txt",cadena);
    
} );

async function clientes() {
    const url = "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json";
    let response = await axios.get(url);
    return response.data;
}

clientes().then((data) =>{ 
    var cadena = "";
    for(var i = 0; i < data.length; i++)
        cadena += data[i]["idCliente"] + "-" + data[i]["NombreCompania"] + "-" + data[i]["NombreContacto"] + "\n";
    fs.writeFileSync("datosCliente.txt",cadena);

});


