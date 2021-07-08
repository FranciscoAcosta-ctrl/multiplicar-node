const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        /* node app -b 10 -l 5 */
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    case 'listar':
        /* node app -b 10 -l 5 */
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido.');
        break;
}
/*Consola   node app --base 10 */

