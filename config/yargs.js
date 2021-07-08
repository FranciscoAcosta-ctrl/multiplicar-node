const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar',
        'Imprime en consola la tabla de multiplicar',
        opts)
    .command('crear',
        'Crea en un documento de texto la tabla de multiplicar',
        opts)
    .argv;



module.exports = {
    argv
}