export const PedidoEnviado = async (props) => {

    const { nome_cliente, codigo_pedido, endereco_cliente, numero_endereco, complemento_endereco, bairro_endereco, cidade_endereco, estado_endereco, cep_endereco, url_rastreio, codigo_rastreio} = props


    const endereco = `${endereco_cliente}, ${numero_endereco}, ${complemento_endereco} - ${bairro_endereco}, ${cidade_endereco} - ${estado_endereco}, ${cep_endereco}.`

    
    const mensagem = `
        Olá ${nome_cliente};

        seu pedido ${codigo_pedido} foi encaminhado;
        Aqui você tem o código para rastreio ${codigo_rastreio}, com ele poderá acompanhar o deslocamento de seu pedido.
        Clique neste link para acompanhar ${url_rastreio}

        End de Entrega: ${endereco}
O
        Caso tenha alguma dúvida, sugestão ou problema, por favor chame nosso time de relacionamento;

        Orit
    `
    return { status: "mensagem enviada", mensagem: mensagem }
}