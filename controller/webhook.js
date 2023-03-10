import { Traycorp } from "../service/traycorp.js"

export const Webhook = async (req, res) => {

    const traycorp = new Traycorp()
    const credenciaistray = await traycorp.executarQuery('SELECT * FROM tray_acesso')

    const payload = {
        seller_id: 391250,
        scope_id: 4375797,
        scope_name: 'order',
        act: 'update',
        app_code: '718'
    }

    const scope_name = payload.scope_name == "order";

    if(scope_name){
        
    }

    // const [rows, fields] = await connection.execute('SELECT * FROM marcas');

    res.send(credenciaistray)

}