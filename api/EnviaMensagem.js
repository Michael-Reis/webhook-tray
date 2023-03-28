import axios from "axios"
export const EnviaMensagem = async (mensagem, celular) => {
    
    await axios.post("https://v5.chatpro.com.br/chatpro-fa6dbd96d4/api/v1/send_message", { message: mensagem, number: celular }, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': '463685ee088ae4dad37cc55cec0a1ec8'
        }
    })

    return "sucesso"

}