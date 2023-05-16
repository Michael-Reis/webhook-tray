import { EnviaMensagem } from "../api/EnviaMensagem.js"
import { Telefones } from "../api/Telefones.js"

export const NotaFiscal = async (props) => {

    const { nome_cliente, codigo_pedido, numero_nf, chave_nf, link_xml } = props

    const mensagem = `Olá ${nome_cliente.toUpperCase()},
    \n*Seu pedido ${codigo_pedido} já foi faturado e em breve será encaminhado.*
    \nAbaixo disponibilizamos sua nota fiscal Eletrônica:
    \nDados da nota fiscal\nNúmero: ${numero_nf}\nChave: ${chave_nf}\nXML: ${link_xml}
    \nPrecisando de alguma ajuda ou informação, pode contar com nosso time de relacionamento;
    \n_Orit_`



    const numeros_telefone = Telefones()
    const promessas = numeros_telefone.map(celular => {
        return EnviaMensagem(mensagem, celular)
    });

    await Promise.all(promessas)
    
    return { status: "mensagem enviada", mensagem: mensagem }
}