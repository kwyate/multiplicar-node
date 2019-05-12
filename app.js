// const multiplicar = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => { console.log(`archivo creado ${ archivo }`) })
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite).catch(err => console.log(err));
        break;
    default:
        console.log('No se reconoce el comando ' + comando);
        break;
}




// console.log("Limite", argv.limite);
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];