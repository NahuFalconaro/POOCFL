import * as fs from 'fs';
import * as ReadlineSync from "readline-sync";
​

class ReadWrite{




    constructor(){

    }

    public retornarArchivo():string[]{
        let file: string = fs.readFileSync('File.txt', 'utf8');
        
        let files: string[] = file.split(',');

        files.forEach(element => {
            console.log(element);      
        });

        return files;
    }

    public agregarValorAlArchivo(str:string){
        let stringAgregar:string = '';//creo variable para resetear archivo de texto

        let archivo = this.retornarArchivo();

        for (let index = 0; index < archivo.length; index++) {
            stringAgregar += archivo[index];
            stringAgregar += ','
        }

        stringAgregar+= '\n' + str;

        fs.writeFileSync("File.txt", stringAgregar);
    }
}


let read = new ReadWrite();

read.retornarArchivo()
read.agregarValorAlArchivo('new libro');