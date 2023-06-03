import axios from "axios"
import { EnviaMensagem } from "../api/EnviaMensagem.js"
import { Telefones } from "../api/Telefones.js"
export const Cancelado = async (props) => {

    const { nome_cliente, codigo_pedido, telefone_cliente } = props

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
    \n*Seu pedido ${codigo_pedido} foi cancelado pois não conseguimos identificar o pagamento*.
    \nFicamos a sua disposição para toda ajuda e/ou informação que achar necessária, através de nosso time de relacionamento;
    \n_Orit_`

    
    
    const numeros_telefone = Telefones()
    numeros_telefone.push(telefone_cliente)

    const promessas = numeros_telefone.map(celular => {
        return EnviaMensagem(mensagem, celular)
    });

    await Promise.all(promessas)

    return { status: "mensagem enviada", mensagem: mensagem }

}