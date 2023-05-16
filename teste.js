import fs from 'fs';
export const Teste = (req, res) => {

    try {
        console.log("funcionou")
        fs.writeFileSync('informacoes.txt', JSON.stringify(req.body) + '\n', { flag: 'a' });
    } catch (error) {
        fs.writeFileSync('informacoes.txt', error.stack + '\n', { flag: 'a' });
    }

};
