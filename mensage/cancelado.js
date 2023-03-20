import axios from "axios"

export const Cancelado = async (props) => {

    const { nome_cliente, codigo_pedido } = props

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
    \n*Seu pedido ${codigo_pedido} foi cancelado pois não conseguimos identificar o pagamento*.
    \nFicamos a sua disposição para toda ajuda e/ou informação que achar necessária, através de nosso time de relacionamento;
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