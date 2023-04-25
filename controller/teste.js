import fs from 'fs';
export const Teste = (req, res) => {

    try {

        // escreve o corpo do webhook em um arquivo de texto
        fs.writeFileSync('informacoes.txt', JSON.stringify(req.body) + '\n', { flag: 'a' });
        res.send({ message: "Teste" });

    } catch (error) {

        // escreve o corpo do webhook em um arquivo de texto
        fs.writeFileSync('informacoes.txt', error.stack + '\n', { flag: 'a' });
        res.status(500).send({ message: "Ocorreu um erro ao processar a requisição" });
    }

};
