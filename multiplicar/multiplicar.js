const fs = require('fs');
const colors = require('colors/safe');
// const data = new Uint8Array(Buffer.from('Hello Node.js'));

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base) || !Number(limite)) {
            reject("No es un numero");
            return;
        }
        console.log(colors.green('============================='));
        console.log(colors.green(`tabla de ${ base }`));
        console.log(colors.green('============================='));
        for (let i = 0; i <= limite; i++) {

            resolve(console.log(`${ base } * ${ i } = ${ base * i }`));
        }
    });
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject("Crear: No es un numero");
            return;
        }
        let data = '';

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }
        fs.writeFile(`tablas/tabla-${ base }-hasta-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(colors.green(colors.green.underline(`tabla-${ base }-hasta-${ limite }.txt`)));
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}