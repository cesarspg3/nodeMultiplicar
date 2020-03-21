const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base, limite) => {
    return new Promise ( (resolve, reject) => {
        if(!Number(base)) {
            reject('no es un número');
        }
    
        let contenido = '';
        for(let i=0; i<=limite; i++) {
            contenido += `${base} * ${i} = ${i*base}\n`;
        }
        
        nameFile = `./tablas/tabla${base}.txt`
        fs.writeFile(nameFile, contenido, (err) => {
            if(err) {
                reject(console.log('error al guardar'));
            } else {
                resolve(nameFile);
            }
        })
    });
}

const listarTabla = (base, limite = 10) => {

    if(!Number(base)) {
        throw new Error(`${base} no es un número`);
    }
    if(!Number(limite)) {
        throw new Error(`${limite} no es un número`);
    }

    console.log(`=========================`.green);
    console.log(`=== tabla del ${base} ===`.green);
    console.log(`=========================`.green);

    for(let i=0; i<=limite; i++) {
        console.log(`${base} * ${i} = ${i*base}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}