import { } from "module";
const mainCarousel = [
    {
        link: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '/assets/banners/banner1_mobile.jpg' : '/assets/banners/banner1.jpg',
        legend: '',
    },
    {
        link: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '/assets/banners/banner2_mobile.jpg' : '/assets/banners/banner2.jpg',
        legend: ''
    },
    {
        link: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? '/assets/banners/banner3_mobile.jpg' : '/assets/banners/banner3.jpg',
        legend: ''
    }
]

const soluctionsCarousel = [
    {
        link: '/assets/products/calcario.png',
        details: '/assets/products/details/calcario_ficha_tecnica.pdf',
        title: 'Calcário Dolomítico Canta Galo',
        description: "Calcário dolomítico de alta pureza e qualidade, atendendo às necessidades das plantas. Corretivo de solo eficiente, rico em cálcio e magnésio. Alta reatividade para neutralizar a acidez rapidamente. Disponível ensacado (PRNT 98%) ou a granel (PRNT 88%). Benefícios incluem correção ágil da acidez, melhoria da estrutura do solo e fornecimento de nutrientes..."
    },
    {
        link: '/assets/products/cal.png',
        details: '/assets/products/details/cal_ficha_tecnica.pdf',
        title: 'Cal caeira Canta Galo',
        description: "Cal virgem de extrema pureza (superior a 95%), obtida pela calcinação de pedras calcárias selecionadas. Versátil, resistente e de grande poder de absorção ao ser misturada com água. Aplicações incluem desinfecção ambiental, correção de pH do solo na agricultura e uso essencial na construção civil para conferir resistência e durabilidade a argamassas..."
    },
    {
        link: '/assets/products/super_cal.png',
        title: 'Super Cal Canta Galo',
        details: '/assets/products/details/cal_ficha_tecnica.pdf',

        description: "Cal hidratado rico em cálcio e magnésio, essenciais para resistência e durabilidade. Produzido a partir do óxido de cálcio, reage com água formando o hidróxido de cálcio. Esses minerais fortalecem materiais, prevenindo corrosão, oxidação, abrasão e danos por agentes corrosivos. Ideal para aplicações industriais que demandam alta resistência."
    }
]

export { mainCarousel, soluctionsCarousel }