
import mysql from "mysql2/promise"

export class Integracao {

    async ConexaoMysql() {
        const conexao = await mysql.createConnection({
            host: "mysql.web-ded-345522a.kinghost.net",
            user: "integracao01",
            password: "vingadores2020",
            database: "integracao01"
        });
        return conexao;
    }

    async executarQuery(query, valores) {
        const conexao = await this.ConexaoMysql();
        const [resultados] = await conexao.execute(query, valores);
        await conexao.end();
        return resultados;
    }

}