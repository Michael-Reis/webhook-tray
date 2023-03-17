
export const NovoPedido = (props) => {
  
    const { nome_cliente } = props
    
    const novo_pedido = `
        Olá ${nome_cliente}

        Estamos passando para confirmar que recebemos seu pedido e o mesmo está sendo preparado.
        Você será notificado(a) a cada fase.
        Caso tenha alguma dúvida ou precise de alguma ajude, pode contar com nosso time de relacionamento;
        Orit
    `
    return {status: "mensagem enviada", mensagem: novo_pedido }
}