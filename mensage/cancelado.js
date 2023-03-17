export const Cancelado = async (props) => {
    const { nome_cliente, codigo_pedido} = props



    const mensagem = `
        Olá ${nome_cliente},

        Seu pedido ${codigo_pedido} foi cancelado pois não conseguimos identificar o pagamento.


        Ficamos a sua disposição para toda ajuda e/ou informação que achar necessária, através de nosso time de relacionamento;


        Orit
    `
    return { status: "mensagem enviada", mensagem: mensagem }

}