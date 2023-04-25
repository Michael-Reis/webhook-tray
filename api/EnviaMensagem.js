import axios from "axios"
export const EnviaMensagem = async (mensagem, celular) => {
    
    await axios.post("https://v5.chatpro.com.br/chatpro-d4dd01b981/api/v1/send_message", { message: mensagem, number: celular }, {
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': '305e1b471cbdb76e737ca669be165643'
        }
    })

    return "sucesso"

}