"use strict";
exports.__esModule = true;
var fs = require("fs");
var ReadWrite = /** @class */ (function () {
    function ReadWrite() {
    }
    ReadWrite.prototype.retornarArchivo = function () {
        var file = fs.readFileSync('File.txt', 'utf8');
        var files = file.split(',');
        files.forEach(function (element) {
            console.log(element);
        });
        return files;
    };
    ReadWrite.prototype.agregarValorAlArchivo = function (str) {
        var stringAgregar = '';
        var archivo = this.retornarArchivo();
        for (var index = 0; index < archivo.length; index++) {
            stringAgregar += archivo[index];
            stringAgregar += ',';
        }
        stringAgregar += '\n' + str;
        fs.writeFileSync("File.txt", stringAgregar);
    };
    return ReadWrite;
}());
var read = new ReadWrite();
read.retornarArchivo();
read.agregarValorAlArchivo('new libro');
