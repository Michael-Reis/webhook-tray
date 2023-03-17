import axios from "axios"

export const ConsultaPedido = async ({ scope_id: codigo_pedido, credenciais_tray }) => {

    const [{ access_token, url }] = credenciais_tray
    const url_pedido = `${url}/orders/${codigo_pedido}/complete?access_token=${access_token}`

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
            nome_cliente: detalhe_pedido.Customer.name,
            endereco_cliente: detalhe_pedido.Customer.address,
            numero_endereco: detalhe_pedido.Customer.number,
            complemento_endereco: detalhe_pedido.Customer.complement,
            bairro_endereco: detalhe_pedido.Customer.neighborhood,
            cep_endereco: detalhe_pedido.Customer.zip_code,
            cidade_endereco: detalhe_pedido.Customer.city,
            estado_endereco: detalhe_pedido.Customer.state,
            telefone_cliente: detalhe_pedido.Customer.cellphone,
            url_rastreio: detalhe_pedido.tracking_url,
            codigo_rastreio: detalhe_pedido.sending_code,
            numero_nf: detalhe_pedido.OrderInvoice?.number,
            chave_nf: detalhe_pedido.OrderInvoice?.key,
            link_xml: detalhe_pedido.OrderInvoice?.link,
            retirada: detalhe_pedido.shipment
        }


        return dado_pedido;

    } catch (error) {
        return { error: "Pedido não identificado" }
    }


}
