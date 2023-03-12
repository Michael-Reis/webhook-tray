import axios from "axios"

export const ConsultaPedido = async ({ scope_id: codigo_pedido, credenciais_tray }) => {

    const [{ access_token, url }] = credenciais_tray
    const url_pedido = `${url}/orders/${codigo_pedido}?access_token=${access_token}`

    try {
        const { data: pedido } = await axios.get(url_pedido);
        const detalhe_pedido = pedido?.Order

        const dado_pedido = {
            status: detalhe_pedido.status,
            data_pedido: detalhe_pedido.date,
            hora_pedido: detalhe_pedido.hour,
        }

        return dado_pedido;

        // código a ser executado se a requisição for bem-sucedida
    } catch (error) {
        
        return { error: "Erro ao consultar pedido" }
    }



}
