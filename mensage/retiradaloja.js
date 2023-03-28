import axios from "axios"
import { EnviaMensagem } from "../api/EnviaMensagem.js"
export const RetiradaLoja = async (props) => {

    const { nome_cliente, codigo_pedido, retirada } = props
    
    const ibirapuera = "Loja *Shopping Ibirapuera* - Piso Campo Belo - Loja 223 (11) 5093 - 1823 \n\nNosso horário de atendimento é de segunda a sábado, das 10h30 às 20h30.\nNão abrimos aos domingos.\nEm Feriados os horários podem ser alterados."
    const higienopolis = "Loja *Shopping Pátio Higienópolis* - Piso Veiga Filho - loja 159 (11) 3660 - 1818 \n\nNosso horário de atendimento é de segunda a sábado, das 10h30 às 20h30 E Domingos das 14h30 às 19h00.\nEm Feriados, os horários podem ser alterados."


    const mensagem = `Olá ${nome_cliente.toUpperCase()},
        \nÓtima notícia !
        \n*Seu pedido de número ${codigo_pedido} está disponível para retirada em nossa loja, conforme sua solicitação.*
        \nSegue nosso endereço e horários: 
        \n${retirada == "RETIRADA NA LOJA DO SHOPPING IBIRAPUERA" ? ibirapuera : higienopolis}
        \nPor favor, lembre-se de levar um documento com foto para a retirada. 
        \n_Orit_
    `

    await EnviaMensagem(mensagem, "11993077675")

    return { status: "mensagem enviada", mensagem: mensagem }
}
