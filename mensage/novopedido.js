import { EnviaMensagem } from "../api/EnviaMensagem.js"
import { Telefones } from "../api/Telefones.js"

export const NovoPedido = async (props) => {
  
    const { nome_cliente } = props
    
    const mensagem = `Olá ${nome_cliente.toUpperCase()}
        \n*Estamos passando para confirmar que recebemos seu pedido e o mesmo está sendo preparado.*
        \nVocê será notificado(a) a cada fase.
        \nCaso tenha alguma dúvida ou precise de alguma ajude, pode contar com nosso time de relacionamento;
        \n_Orit_
    `

    const numeros_telefone = Telefones()
    const promessas = numeros_telefone.map(celular => {
        return EnviaMensagem(mensagem, celular)
    });

    await Promise.all(promessas)

    return {status: "mensagem enviada", mensagem: mensagem }
}