import axios from "axios"
import { EnviaMensagem } from "../api/EnviaMensagem.js"

export const Cancelado = async (props) => {

    const { nome_cliente, codigo_pedido } = props

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
    \n*Seu pedido ${codigo_pedido} foi cancelado pois não conseguimos identificar o pagamento*.
    \nFicamos a sua disposição para toda ajuda e/ou informação que achar necessária, através de nosso time de relacionamento;
    \n_Orit_`

    await EnviaMensagem(mensagem, "11953697965")

    return { status: "mensagem enviada", mensagem: mensagem }

}