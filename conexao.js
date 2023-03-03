import mysql from "mysql2/promise"

export const ConexaoMysql = async () => {

    const conexao = await mysql.createConnection({
        host: "mysql.web-ded-345522a.kinghost.net",
        user: "api06",
        password: "vingadores2020",
        database: "api06"
    })

    return conexao
}