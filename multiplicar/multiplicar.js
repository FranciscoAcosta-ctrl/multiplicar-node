const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) =>{
    return new Promise((resolve, reject)=>{
        if(!Number(base) || !Number(limite)){
            if(!Number(base)){
                reject(`El numero base "${base}" no es un numero.`);
                return;
            }else if(!Number(limite)){
                reject(`El numero limite "${limite}" no es un numero.`);
                return
            }
        }
        let data = "";
        console.log("===========================\n".green);
        for (let index = 1; index <= limite; index++) {
            data+=`${base} * ${index} = ${base*index}\n`;
        }
        console.log(data);
        resolve("Listado completado.");
        console.log("===========================".green);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base) || !Number(limite)){
            if(!Number(base)){
                reject(`El numero base "${base}" no es un numero.`);
                return;
            }else if(!Number(limite)){
                reject(`El numero limite "${limite}" no es un numero.`);
                return
            }
        }

        let data = '';
        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tablaDel${base}.txt`, data, (err) => {
            if (err) {
                reject(err);
            }
            resolve(`El archivo fue creado! Tabla del ${base}`.green);
        });

    });
}


module.exports = {
    crearArchivo, listarTabla
}

