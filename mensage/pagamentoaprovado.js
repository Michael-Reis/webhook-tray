import { EnviaMensagem } from "../api/EnviaMensagem.js"

export const PagamentoAprovado = async (props) => {

    const { nome_cliente, codigo_pedido, endereco_cliente, numero_endereco, complemento_endereco, bairro_endereco, cidade_endereco, estado_endereco, cep_endereco } = props
    const endereco = `${endereco_cliente}, ${numero_endereco}, ${complemento_endereco} - ${bairro_endereco}, ${cidade_endereco} - ${estado_endereco}, ${cep_endereco}.`

    const mensagem = `Olá ${nome_cliente.toUpperCase()}, \n*Seu pagamento foi Aprovado !*
    \nSeu pagamento foi recebido com sucesso.
    \nEstaremos agora iniciando os processo de limpeza e higienização para preparar o envio.
    \nSeu Pedido tem o Número  *${codigo_pedido}*

    \n${endereco}

    \nManteremos contato, informando quando o produto for encaminhado, e disponibilizando o código para rastreio quando a entrega for pelos Correios	
    \nOu informaremos quando a peça estiver disponível em uma de nossas lojas, se esta foi a forma escolhida.	

    \nFicamos a disposição através de nosso time de relacionamento;	

    \n_Orit_`;

    await EnviaMensagem(mensagem, "11993077675")

    return { status: "mensagem enviada", mensagem: mensagem }
}
