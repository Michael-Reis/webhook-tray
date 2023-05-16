import axios from "axios"
import { Integracao } from "../service/integracao.js"
import e from "express"

export const ConsultaPedido = async ({ scope_id: codigo_pedido, credenciais_tray, act }) => {

    const [{ access_token, url }] = credenciais_tray
    const url_pedido = `${url}/orders/${codigo_pedido}/complete?access_token=${access_token}`

    try {
        const { data: pedido } = await axios.get(url_pedido);
        const detalhe_pedido = pedido?.Order

        const dado_pedido = {
            codigo_pedido: codigo_pedido,
            status: detalhe_pedido.status,
            // status: "A ENVIAR VINDI",
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
            numero_nf: detalhe_pedido.OrderInvoice[0]?.OrderInvoice?.number ? detalhe_pedido.OrderInvoice[0].OrderInvoice?.number : "Não identificado",
            chave_nf: detalhe_pedido.OrderInvoice[0]?.OrderInvoice?.key ? detalhe_pedido.OrderInvoice[0].OrderInvoice?.key : "Não identificado",
            link_xml: detalhe_pedido.OrderInvoice[0]?.OrderInvoice?.link ? detalhe_pedido.OrderInvoice[0].OrderInvoice?.link : "Não identificado",
            retirada: detalhe_pedido.shipment
            // retirada: "RETIRADA NA LOJA DO SHOPPING HIGIENOPOLIS"
        }


        try {
            
            const integracao = new Integracao()
            const resultado = await integracao.executarQuery('SELECT * FROM pedido_whatsapp WHERE id_pedido = ?', [codigo_pedido]);
            const status_pedido = detalhe_pedido.status
            const status_pedido_db = resultado[0]?.status_pedido

            if (act === "insert" && resultado.length === 0) {
                console.log("inserindo")
                await integracao.executarQuery('INSERT INTO pedido_whatsapp SET id_pedido = ?, status_pedido = ?', [codigo_pedido, status_pedido]);

            } else if (act === "update" && resultado.length > 0) {

                if (status_pedido_db === status_pedido) {
                    console.log("pedido com status já cadastrado")
                    return { error: "Pedido com status já cadastrado" }
                }

                console.log("atualizando o status do pedido")
                await integracao.executarQuery('UPDATE pedido_whatsapp SET status_pedido = ? WHERE id_pedido = ?', [status_pedido, codigo_pedido]);

            } else {
                return { error: "Pedido já existente no banco de dados ou ação inválida" }
            }

            return dado_pedido;


        } catch (error) {
            console.log(error)
            return { error: "Erro ao buscar no banco de dados" }
        }


    } catch (error) {
        console.log(error)
        return { error: "Pedido não identificado" }
    }


}
