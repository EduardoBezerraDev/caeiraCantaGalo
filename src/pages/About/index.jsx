import styles from '/public/assets/css/about.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import transportesCantaGalo from '/assets/companies/transportes_canta_galo.mp4'
import fazendaCantaGalo from '/assets/companies/fazenda_canta_galo.mp4'
import calcarioCantaGalo from '/assets/companies/calcario_canta_galo.mp4'

import video from '/assets/aboutUs/pec_nordeste.mp4'

import { Carousel } from 'react-responsive-carousel';

const About = () => {
    return (
        <div style={{ marginTop: '15vh', textAlign: 'center', padding: 20, }}>
            <section>
                <Carousel autoPlay infiniteLoop interval={10000} preview={false} swipeable={false} >
                    <div className={styles.section_profile}>
                        <img className={styles.profile} src="/assets/aboutUs/profile_founder.jpg" alt="Fundador da empresa" />
                        <Typography textAlign={'left'} padding={2} paddingTop={3} display={'flex'} flexDirection={'column'}>
                            <h3>Fundador da empresa</h3>
                            <p>
                                Raimundo Nonato de Andrade,  casado com Marta Maria Torres de Andrade. Um homem simples, de muita fé, diante da oportunidade na época estabelecida pela criação de estradas,visionário desde 1977, conseguiu se destacar no mercado da mineração. Pai de 5 filhos,  que sempre estiveram ao seu lado em busca da excelência e qualidade da empresa e de seus produtos fabricados. Cada familiar, contribuindo com apoio de idéas e Know How . Mas  sempre seguindo as diretrizes de seu fundador. Hoje, na  atual gestão do Grupo Canta Galo Caeira,  está seu filho Raimundo Ronald Torres de Andrade, que procura seguir as diretrizes traçadas, criando padrões de modernidade e sempre inovando na busca da qualidade extrema de seus produtos e processos. Já despontando com grande destaque no cenário da mineração, criação de cavalos e produção de milho.Fortalecendo ainda mais o Grupo Caeira Canta Galo.
                            </p>
                        </Typography>
                    </div>
                    <div className={styles.section_profile}>
                        <img className={styles.profile} src="/assets/aboutUs/new-manager.jpg" alt="Fundador da empresa" />
                        <Typography textAlign={'left'} padding={2} paddingTop={3} display={'flex'} flexDirection={'column'}>
                            <h3>Gestor do Grupo Caeira</h3>
                            <p>
                                Raimundo Ronald Torres de Andrade, assumiu a empresa buscando não medir esforços para o crescimento do grupo Caeira Canta Galo. Hoje a empresa de mineração, trabalha com extrema qualidade, possuindo um sistema de gestão que demonstra os custos dos processos e departamentos. A busca é constante pela qualidade total, o grupo, já começa se adequar em busca do ISO, na qualidade de produtos e empresarial. A gestão é participativa e colaborativa,  criando um efeito sinergistico fantastico. O grupo sempre está inovando, seja pela empresa de transportes ou através de sua fazenda, hoje produção de grãos, e de milho, começa despontar agregando no faturamento do grupo, assim como a criação de gado e de cavalos. A criação de cavalos das raças Paint Horse e Quarto de milha, ambas originária dos Estados Unidos. A grande aposta é na raça Paint Horse que é a grande paixão aposta do momento.
                            </p>
                        </Typography>
                    </div>
                </Carousel>
            </section>
            <Typography variant="h4" className={styles.title}>Nossas Empresas</Typography><br/>
            <section className={styles.aboutCardContainer} style={{ marginTop: '2vh' }}>
                <section className={styles.aboutCardContainer}>

                    <Card className={styles.card} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            style={{ backgroundImage: 'url("/assets/aboutUs/calcario_canta_galo.png")' }}
                            sx={{ height: 160 }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Transportes do Nordeste
                            </Typography>
                            <video className={styles.video} controls width={'100%'} >
                                <source src={calcarioCantaGalo} type="video/mp4" />
                            </video>
                        </CardContent>
                    </Card>
                    <Card className={styles.card} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            style={{ backgroundImage: 'url("/assets/aboutUs/caeira_canta_galo.png")' }}
                            sx={{ height: 160 }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Transportes do Nordeste
                            </Typography>
                            <video className={styles.video} controls width={'100%'} >
                                <source src={transportesCantaGalo} type="video/mp4" />
                            </video>
                        </CardContent>
                    </Card>
                    <Card className={styles.card} sx={{ maxWidth: 345 }}>
                        <CardMedia
                            style={{ backgroundImage: 'url("/assets/aboutUs/fazenda_canta_galo.png")', backgroundSize: 'auto' }}
                            sx={{ height: 160, width: '100%' }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Fazenda Canta Galo
                            </Typography>
                            <video className={styles.video} controls width={'100%'} >
                                <source src={fazendaCantaGalo} type="video/mp4" />
                            </video>
                        </CardContent>
                    </Card>
                </section>
            </section>
            <section style={{ marginTop: '15vh', display: 'flex', justifyContent: 'center' }}>
                <video className={styles.video} controls>
                    <source src={video} type="video/mp4" />
                </video>
            </section>
        </div>
    );
};

export default About;
