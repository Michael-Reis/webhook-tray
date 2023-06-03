import { EnviaMensagem } from "../api/EnviaMensagem.js"
import { Telefones } from "../api/Telefones.js"

export const PedidoEnviado = async (props) => {

    const { nome_cliente, codigo_pedido, endereco_cliente, numero_endereco, complemento_endereco, bairro_endereco, cidade_endereco, estado_endereco, cep_endereco, url_rastreio, codigo_rastreio, telefone_cliente } = props
    const endereco = `${endereco_cliente}, ${numero_endereco}, ${complemento_endereco} - ${bairro_endereco}, ${cidade_endereco} - ${estado_endereco}, ${cep_endereco}.`

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
    \n*Seu pedido ${codigo_pedido} foi encaminhado*
    \nAqui você tem o código para rastreio ${codigo_rastreio}, com ele poderá acompanhar o deslocamento de seu pedido.
    \nClique neste link para acompanhar ${url_rastreio}
    \nEndereço de Entrega: ${endereco.toUpperCase()}
    \nCaso tenha alguma dúvida, sugestão ou problema, por favor chame nosso time de relacionamento;
    \n_Orit_`


    const numeros_telefone = Telefones()
    numeros_telefone.push(telefone_cliente)

    const promessas = numeros_telefone.map(celular => {
        return EnviaMensagem(mensagem, celular)
    });

    await Promise.all(promessas)

    return { status: "mensagem enviada", mensagem: mensagem }
}