import axios from "axios"

export const PedidoEnviado = async (props) => {

    const { nome_cliente, codigo_pedido, endereco_cliente, numero_endereco, complemento_endereco, bairro_endereco, cidade_endereco, estado_endereco, cep_endereco, url_rastreio, codigo_rastreio } = props
    const endereco = `${endereco_cliente}, ${numero_endereco}, ${complemento_endereco} - ${bairro_endereco}, ${cidade_endereco} - ${estado_endereco}, ${cep_endereco}.`

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
    \n*Seu pedido ${codigo_pedido} foi encaminhado*
    \nAqui você tem o código para rastreio ${codigo_rastreio}, com ele poderá acompanhar o deslocamento de seu pedido.
    \nClique neste link para acompanhar ${url_rastreio}
    \nEndereço de Entrega: ${endereco.toUpperCase()}
    \nCaso tenha alguma dúvida, sugestão ou problema, por favor chame nosso time de relacionamento;
    \n_Orit_`


    await axios.post("https://v5.chatpro.com.br/chatpro-edf08dc0d3/api/v1/send_message", { message: mensagem, number: "11993077675" }, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': '3bc94532709481472b326e56506ecfb2'
        }
    })


    return { status: "mensagem enviada", mensagem: mensagem }
}