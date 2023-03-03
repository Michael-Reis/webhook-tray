
import { ConexaoMysql } from "../conexao.js"

export const Webhook = async (req, res) => {


    const connection = await ConexaoMysql()

    // const connection = await mysql.createConnection({
    //     host: "mysql.web-ded-345522a.kinghost.net",
    //     user: "api06",
    //     password: "vingadores2020",
    //     database: "api06"
    // })

    
    const [rows, fields] = await connection.execute('SELECT * FROM marcas');

    res.send(rows)
}