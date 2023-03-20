import axios from "axios"

export const NotaFiscal = async (props) => {

    const { nome_cliente, codigo_pedido, numero_nf, chave_nf, link_xml } = props

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
    \n*Seu pedido ${codigo_pedido} já foi faturado e em breve será encaminhado.*
    \nAbaixo disponibilizamos sua nota fiscal Eletrônica:
    \nDados da nota fiscal\nNúmero: ${numero_nf}\nChave: ${chave_nf}\nXML: ${link_xml}
    \nPrecisando de alguma ajuda ou informação, pode contar com nosso time de relacionamento;
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