import axios from "axios"

export const ConsultaPedido = async ({ scope_id: codigo_pedido, credenciais_tray }) => {

    const [{ access_token, url }] = credenciais_tray
    const url_pedido = `${url}/orders/${codigo_pedido}?access_token=${access_token}`

    try {
        const { data: pedido } = await axios.get(url_pedido);
        const detalhe_pedido = pedido?.Order

        const dado_pedido = {
            codigo_pedido: codigo_pedido,
            status: detalhe_pedido.status,
            data_pedido: detalhe_pedido.date,
            hora_pedido: detalhe_pedido.hour,
            total_parcial: detalhe_pedido.partial_total,
            taxa: detalhe_pedido.taxes,
            disconto: detalhe_pedido.discount,
            entrega: detalhe_pedido.shipment,
            valor_entrega: detalhe_pedido.shipment_value,
        }

        return dado_pedido;

    } catch (error) {
        console.log("ocorreu um erro ao consultar o pedido", error)
        return { error: "Pedido não identificado" }
    }


}
