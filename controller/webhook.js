import { Traycorp } from "../service/traycorp.js"
import { ConsultaPedido } from "../api/ConsultaPedido.js"
import { NovoPedido } from "../mensage/novopedido.js"
import { NotaFiscal } from "../mensage/nf.js"
import { PagamentoAprovado } from "../mensage/pagamentoaprovado.js"
import { PedidoEnviado } from "../mensage/pedidoenviado.js"
import { Cancelado } from "../mensage/cancelado.js"
import { RetiradaLoja } from "../mensage/retiradaloja.js"
import ValidaPayloads from "./validapayload.js"

export const Webhook = async (req, res) => {

    // Definir um esquema JSON para os dados esperados
    const schema = {
        type: "object",
        properties: {
            seller_id: { type: "number" },
            scope_id: { type: "number" },
            scope_name: { type: "string" },
            act: { type: "string" },
            app_code: { type: "number" }
        },
        required: ["seller_id", "scope_id", "scope_name", "act", "app_code"]
    };

    const { valid, error } = ValidaPayloads(req.body, schema);

    if (!valid) {
        console.error(error);
        console.log(typeof (req.body.seller_id))
        return res.status(400).json({ error: "Dados inválidos" });
    }

    const { seller_id, scope_id, scope_name, act, app_code } = req.body;

    const traycorp = new Traycorp()
    const credenciais_tray = await traycorp.executarQuery('SELECT * FROM tray_acesso')

    const actions = {

        order_create: async () => {
            const dados_pedido = await ConsultaPedido({ scope_id, credenciais_tray })
            if (dados_pedido.error) return res.send({ error: dados_pedido.error })
            return NovoPedido(dados_pedido);
        },

        order_update: async () => {

            const dados_pedido_atualizado = await ConsultaPedido({ scope_id, credenciais_tray })

            if (dados_pedido_atualizado.error) {
                return { error: dados_pedido_atualizado.error }
            }

            const status_update = {
                "A ENVIAR VINDI": async _ => await PagamentoAprovado(dados_pedido_atualizado),
                "EMISSÃO DE NF": async _ => await NotaFiscal(dados_pedido_atualizado),
                "ENVIADO": async _ => await PedidoEnviado(dados_pedido_atualizado),
                "PRONTO PARA RETIRADA EM LOJA": async _ => await RetiradaLoja(dados_pedido_atualizado),
                "CANCELADO": async _ => await Cancelado(dados_pedido_atualizado)
            }

            const retorno = await status_update[dados_pedido_atualizado.status] ? await status_update[dados_pedido_atualizado.status]() : { error: "Status não encontrado" };
            return { ...retorno }
        }
    }

    const actionKey = `${scope_name}_${act}`;
    const action = actions[actionKey];

    if (seller_id == 1065646 && action) {

        const info_pedido = await action();
        if (info_pedido.error) return res.send({ error: info_pedido.error })
        return res.send({ ...info_pedido });

    }

    return res.send({ error: "Ação não encontrada" });



}