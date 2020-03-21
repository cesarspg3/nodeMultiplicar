const { crearArchivo, listarTabla } = require ('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv
const colors = require('colors');

const { base, limite } = argv
const comando = argv._[0];
console.log(base, limite);

switch(comando) {
    case 'listar':
        listarTabla(base, limite)
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`el fichero ${colors.green(archivo)} creado correctamente`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('comando no reconocido');
        break;
}
