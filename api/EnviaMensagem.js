import axios from "axios"

export const EnviaMensagem = async (mensagem, celular) => {
    
    await axios.post("https://v5.chatpro.com.br/chatpro-edf08dc0d3/api/v1/send_message", { message: mensagem, number: celular }, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': '3bc94532709481472b326e56506ecfb2'
        }
    })

    return "sucesso"

}