import axios from "axios"

export const ConsultaPedido = async ({ scope_id: codigo_pedido, credenciais_tray }) => {

    const [{ access_token, url }] = credenciais_tray
    const url_pedido = `${url}/orders/${codigo_pedido}?access_token=${access_token}`

    try {
        const { data: pedido } = await axios.get(url_pedido);
        const detalhe_pedido = pedido?.Order

        console.log(detalhe_pedido)
        // object que estou usando para testar
//         taxes: '0.00',
//   discount: '0.00',
//   point_sale: 'LOJA VIRTUAL',
//   shipment: 'SEDEX',
//   shipment_value: '10.68',
//   shipment_date: '2022-12-20',
//   delivered: '1',
//   delivered_status: '            <table border="1" cellpadding="4" hspace="10" cellspacing="1" width="100%" style="border-collapse:collapse">\n' +
//     '                <tbody>\n' +
//     '                    <tr>\n' +
//     '                        <th>Data</th>\n' +
//     '                        <th>Local</th>\n' +
//     '                        <th>Situação</th>\n' +
//     '                    </tr>\n' +
//     '                                <tr>\n' +
//     '                <td>21/12/2022 17:52</td>\n' +
//     '                <td>Unidade de Distribuição - SAO PAULO/SP</td>\n' +
//     '                <td><strong>Objeto entregue ao destinatário</strong></td>\n' +
//     '            </tr>            <tr>\n' +
//     '                <td>21/12/2022 11:21</td>\n' +
//     '                <td>Unidade de Distribuição - SAO PAULO/SP</td>\n' +
//     '                <td>Objeto saiu para entrega ao destinatário</td>\n' +
//     '            </tr>            <tr>\n' +
//     '                <td>21/12/2022 01:01</td>\n' +
//     '                <td>Unidade de Tratamento - SAO PAULO/SP<br/>  - /</td>\n' +
//     '                <td>Objeto em trânsito - por favor aguarde</td>\n' +
//     '            </tr>            <tr>\n' +
//     '                <td>20/12/2022 16:12</td>\n' +
//     '                <td>Agência dos Correios - SAO PAULO/SP<br/>  - /</td>\n' +
//     '                <td>Objeto em trânsito - por favor aguarde</td>\n' +
//     '            </tr>            <tr>\n' +
//     '                <td>20/12/2022 15:02</td>\n' +
//     '                <td>Agência dos Correios - SAO PAULO/SP</td>\n' +
//     '                <td>Objeto postado</td>\n' +
//     '            </tr>\n' +
//     '                </tbody>\n' +
//     '            </table>',
//   shipping_cancelled: '',
//   store_note: '17/12/2022 11:34:46 Pedido em 1 vez de R$ 5,401.68 através do Pix - Vindi - Pix<br /> Link da transação: https://intermediador.yapay.com.br/orders/pix/9534c75ef7f3cb7f3f4ff360e289199a',
//   customer_note: '',
//   partner_id: '',
//   discount_coupon: '',
//   client_ip: '179.191.110.236',
//   payment_method_rate: '-599.00',
//   installment: '1',
//   value_1: '0.00',
//   sending_code: 'OV201866211BR',
//   sending_date: '2022-12-20',
//   billing_address: '',
//   delivery_time: '8',
//   payment_method_id: '10545',
//   payment_method: 'Pix - Vindi',
//   session_id: 'mtgvk34f230p1n3ickidhed2l5',
//   total: '5401.68',
//   payment_date: '2022-12-17',
//   access_code: 'A0444A66412E39B',
//   shipment_integrator: 'Correios',
//   modified: '2022-12-22 04:03:58',
//   printed: '1',
//   interest: '0.00',
//   cart_additional_values_discount: '0.00',
//   cart_additional_values_increase: '0.00',
//   id_quotation: '',
//   estimated_delivery_date: '2022-12-28',
//   is_traceable: '1',
//   external_code: '',
//   tracking_url: 'http://www.orit.com.br/rastreio?cod_acesso=A0444A66412E39B&loja=765915',
//   has_payment: '1',
//   has_shipment: '1',
//   has_invoice: '0',
//   delivery_date: '',
//   total_comission_user: '0.00',
//   total_comission: '0.00',
//   OrderStatus: {
//     id: '69',
//     default: '1',
//     type: 'closed',
//     show_backoffice: '1',
//     allow_edit_order: '0',
//     description: '',
//     status: 'FINALIZADO',
//     show_status_central: '1',
//     background: '#85CC8D',
//     display_name: '',
//     font_color: ''
//   },
//   PickupLocation: [],
//   ProductsSold: [ { id: '6453' } ],
//   Payment: [ { id: '3517' } ],
//   OrderInvoice: [],
//   MlOrder: [],
//   OrderTransactions: [
//     {
//       url_payment: 'https://intermediador.yapay.com.br/orders/pix/9534c75ef7f3cb7f3f4ff360e289199a',
//       transaction_id: '92831797'
//     }
//   ],
//   MarketplaceOrder: [],
//   Extensions: [],
//   CustomerAddress: { id: '4223' },
//   payments_notification: {
//     notification: 'https://765915.commercesuite.com.br/loja/retorno_pagamento.php?loja=765915&gateway=5&codigoAcesso=A0444A66412E39B&notification=true'
//   },
//   partner_name: ''
// }

        const dado_pedido = {
            codigo_pedido: codigo_pedido.code,
            status: detalhe_pedido.status,
            data_pedido: detalhe_pedido.date,
            hora_pedido: detalhe_pedido.hour,
            total_parcial: detalhe_pedido.partial_total,
            taxa: detalhe_pedido.taxes,
            disconto: detalhe_pedido.discount,
            entrega: detalhe_pedido.shipment,
            valor_entrega: detalhe_pedido.shipment_value,
            data_entrega: shipment_date,
        }

        return dado_pedido;

    } catch (error) {
        
        return { error: "Pedido não identificado" }
    }



}
