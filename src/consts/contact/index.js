const contacts = {
    email: 'administração@caeiracantagalo.com',
    sac: '5588981409245',
    whatsappBuyInfo: {
        number: '5585981409245',
    },
    whatsappBuyMounted: (product) => {
        return `Olá, tudo bem?\ngostaria de obter mais informações do produto: ${product}`
    },
    whatsappContactMounted: ({ name, message }) => {
        return `Olá Tudo bem?\nmeu nome é ${name}\n${message}`
    }

}

export default contacts