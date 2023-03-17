
export const PagamentoAprovado = async (props) => {

    const { nome_cliente, codigo_pedido, endereco_cliente, numero_endereco, complemento_endereco, bairro_endereco, cidade_endereco, estado_endereco, cep_endereco } = props
    const endereco = `${endereco_cliente}, ${numero_endereco}, ${complemento_endereco} - ${bairro_endereco}, ${cidade_endereco} - ${estado_endereco}, ${cep_endereco}.`

    const novo_pedido = `
    
        Olá ${nome_cliente}; Seu pagamento foi Aprovado !

        Seu pagamento foi recebido com sucesso.
        Estaremos agora iniciando os processo de limpeza e higienização para preparar o envio.
        Seu Pedido tem o Número ${codigo_pedido}

        ${endereco}

        Manteremos contato, informando quando o produto for encaminhado, e disponibilizando o código para rastreio quando a entrega for pelos Correios	
        Ou informaremos quando a peça estiver disponível em uma de nossas lojas, se esta foi a forma escolhida.	
            
        Ficamos a disposição através de nosso time de relacionamento;	

        Orit
    `
    return { status: "mensagem enviada", mensagem: novo_pedido }
}
