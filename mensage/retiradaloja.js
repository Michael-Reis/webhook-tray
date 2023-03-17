export const RetiradaLoja = (props) => {

    const { nome_cliente, codigo_pedido, retirada } = props

    const ibirapuera = "Loja *Shopping Ibirapuera* - Piso Campo Belo - Loja 223 (11) 5093 - 1823"
    const oscarfreire = "Loja *Shopping Pátio Higienópolis* - Piso Veiga Filho - loja 159 (11) 3660 - 1818"

    const mensagem = `
    
        Olá ${nome_cliente}},
        "Ótima notícia !
        Seu pedido de número ${codigo_pedido} está disponível para retirada em nossa loja, conforme sua solicitação."

        Segue nossos Endereços e  Horários:
        Estamos localizados:

        ${retirada == "RETIRADA NA LOJA DO SHOPPING IBIRAPUERA" && ibirapuera}
        ${retirada == "RETIRADA NA LOJA DO SHOPPING HIGIENOPOLIS" && oscarfreire}

        Nosso horário de atendimento é de segunda a sábado, das 10h30 às 20h30. 
        E Domingos das 14h30 às 19h00 apenas a loja do Higienópolis. 
        A *loja do Ibirapuera, não abre aos domingos.*

        Por favor, lembre-se de levar um documento com foto para a retirada. 

        Orit
    `
    return { status: "mensagem enviada", mensagem: mensagem }
}
