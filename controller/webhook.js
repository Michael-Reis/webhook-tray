import { Traycorp } from "../service/traycorp.js"
import { ConsultaPedido } from "../api/ConsultaPedido.js"

export const Webhook = async (req, res) => {

    const traycorp = new Traycorp()
    const credenciais_tray = await traycorp.executarQuery('SELECT * FROM tray_acesso')

    const { seller_id, scope_id, scope_name, act, app_code } = req.body;

    const actions = {
        order_create: async () => {
            const dadosPedido = await ConsultaPedido({ scope_id, credenciais_tray })
            if (dadosPedido.error) return res.send({ error: dadosPedido.error })
            return res.send(dadosPedido)
        },

        order_update: async () => {
            return res.send("Pedido atualizado")
        }
    }

    const actionKey = `${scope_name}_${act}`;
    const action = actions[actionKey];

    if (seller_id == 1065646 && action) {
        return action();
    }

    return res.send({ error: "Ação não encontrada" });
}