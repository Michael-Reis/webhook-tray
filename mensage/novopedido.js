import { EnviaMensagem } from "../api/EnviaMensagem.js"

export const NovoPedido = async (props) => {
  
    const { nome_cliente } = props
    
    const mensagem = `Olá ${nome_cliente.toUpperCase()}
        \n*Estamos passando para confirmar que recebemos seu pedido e o mesmo está sendo preparado.*
        \nVocê será notificado(a) a cada fase.
        \nCaso tenha alguma dúvida ou precise de alguma ajude, pode contar com nosso time de relacionamento;
        \n_Orit_
    `
    
    await EnviaMensagem(mensagem, "11953697965")

    return {status: "mensagem enviada", mensagem: mensagem }
}