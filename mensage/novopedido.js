
export const NovoPedido = async (props) => {
  
    const { nome_cliente } = props
    
    const mensagem = `
        Olá ${nome_cliente}

        Estamos passando para confirmar que recebemos seu pedido e o mesmo está sendo preparado.
        Você será notificado(a) a cada fase.
        Caso tenha alguma dúvida ou precise de alguma ajude, pode contar com nosso time de relacionamento;
        Orit
    `

    
    await axios.post("https://v5.chatpro.com.br/chatpro-edf08dc0d3/api/v1/send_message", { message: mensagem, number: "11993077675" }, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': '3bc94532709481472b326e56506ecfb2'
        }
    })

    return {status: "mensagem enviada", mensagem: novo_pedido }
}