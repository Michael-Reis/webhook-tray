import axios from "axios"

export const RetiradaLoja = async (props) => {

    const { nome_cliente, codigo_pedido, retirada } = props
    const ibirapuera = "Loja *Shopping Ibirapuera* - Piso Campo Belo - Loja 223 (11) 5093 - 1823"
    const oscarfreire = "Loja *Shopping Pátio Higienópolis* - Piso Veiga Filho - loja 159 (11) 3660 - 1818"

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
        \nÓtima notícia !
        \n*Seu pedido de número ${codigo_pedido} está disponível para retirada em nossa loja, conforme sua solicitação.*
        \nSegue nossos Endereços e  Horários:\n\n${retirada == "RETIRADA NA LOJA DO SHOPPING IBIRAPUERA" ? ibirapuera : oscarfreire}
        \nNosso horário de atendimento é de segunda a sábado, das 10h30 às 20h30. 
        \nE Domingos das 14h30 às 19h00 apenas a loja do Higienópolis.\nA *loja do Ibirapuera, não abre aos domingos.*
        \nPor favor, lembre-se de levar um documento com foto para a retirada. 
        \nOrit`

    await axios.post("https://v5.chatpro.com.br/chatpro-edf08dc0d3/api/v1/send_message", { message: mensagem, number: "11993077675" }, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': '3bc94532709481472b326e56506ecfb2'
        }
    })

    return { status: "mensagem enviada", mensagem: mensagem }
}
