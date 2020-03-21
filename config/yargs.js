
const options = {
    base: {
        demman: true,//es obligatorio
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')//node app listar -b=1 -l=30
    .command('listar','Imprime en consola la tabla de multiplicar',options)
    .command('crear','Crear un txt con la tabla de multiplicar',options)    
    .help()
    .argv;

module.exports = {
    argv
}