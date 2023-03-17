export const NotaFiscal = async (props) => {

    const { nome_cliente, codigo_pedido, numero_nf, chave_nf, link_xml } = props

    const mensagem = `
        Olá ${nome_cliente},
        Seu pedido ${codigo_pedido} já foi faturado e em breve estará sendo encaminhado.
        Abaixo disponibilizamos sua nota fiscal Eletrônica.
        
        Dados da nota fiscal
        Número: ${numero_nf}
        Chave: ${chave_nf}
        XML: ${link_xml}
        
        Precisando de alguma ajuda ou informação, pode contar com nosso time de relacionamento;
        
        Orit
    `
    return { status: "mensagem enviada", mensagem: mensagem }
}