import { article } from 'framer-motion/client'
import teste from '../assets/images/teste.jpg'

export default function ServicePage(){

    const services = [
        {
            title: 'Construção',
            description: 'Executamos obras residenciais, comerciais e institucionais com qualidadee segurança.'
        },
        {
            title: 'Remodelação Reabilitação',
            description: 'Transformamos e modernizamos imóveis, valorizando os espaços com soluções funcionais.'
        },
        {
            title: 'Teto Falso e Pladur',
            description: 'Instalamos tetos falsos e divisórias em pladur, proporcionando acabamentos estéticos.'
        },
        {
            title: 'Estuque e Gesso',
            description: 'Aplicamos estuques e gesso para criar superfícies lisas, resistentes e prontas.'
        },
        {
            title: 'Pintura Interior e Exterior',
            description: 'Realizamos pinturas profissionais com materiais de qualidade, garantindo proteção.'
        },
        {
            title: 'Ladrilho e Pavimentos',
            description: 'Executamos a instalação de ladrilhos, cerâmicas e pavimentos com precisão.'
        },
        {
            title: 'Canalização',
            description: 'Projetamos, instalamos e efetuamos manutenção de sistemas hidráulicos.'
        },
        {
            title: 'Instalações Elétricas',
            description: 'Realizamos instalações elétricas residenciais e comerciais de acordo com as normas técnicas.'
        },
        {
            title: 'Alvenaria',
            description: 'Construímos estruturas de alvenaria com materiais de qualidade.'
        },
        {
            title: 'Manutenção de Edifícios',
            description: 'Prestamos serviços de manutenção preventiva e corretiva em edifícios.'
        }

    ]
    return(
        <>
             {/**header aboutpage */}
            <div className='md:h-[80vh] h-[50vh] relative'>
                <img src={teste} className='inset-0 h-full w-full object-fit' alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute z-10 inset-0">
                    <div className='h-full md:max-w-5xl mx-auto relative flex items-center justify-center'>
                        <h1 className='md:text-5xl text-4xl font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                                to-[#f8e8a3] bg-clip-text text-transparent md:absolute md:bottom-6 md:left-0'>Nossos Serviços</h1>
                    </div>
                </div>
            </div>

            <section className='md:h-screen bg-slate-100'>
                <div className="md:max-w-5xl mx-auto md:h-full md:p-0 p-6 flex items-center justify-center">
                    <div className=" w-full grid md:grid-cols-4 grid-cols-2 gap-3">
                        {
                            services?.map(service => (
                                <article className='border w-full h-full rounded-lg md:p-3 p-2 space-y-2 cursor-pointer hover:scale-105 delay-150 duration-300 transition-ease-in-out transform
                                bg-white shadow-md border-slate-200 flex flex-col items-center justify-center'>
                                    
                                    <h3 className='text-lg font-bold text-center'>{service?.title}</h3>
                                    <p className='text-center'>{service?.description}</p>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </section>

            <section className='md:h-[80vh] bg-zinc-950'>
                    <div className="md:max-w-5xl mx-auto h-full flex md:flex-row flex-col md:p-0 p-6 md:items-center md:justify-center">
                        <div className="flex-1 h-[80%] border relative">
                            <img src={teste} className='h-full w-full object-fit' alt="" />
                            <div className="bg-black opacity-50 inset-0 z-10 absolute"></div>
                        </div>
                        <div className="flex-1 h-[80%] border p-4 bg-zinc-900 shadow-md border-zinc-900 rounded md:p-4 space-y-3 flex flex-col justify-center">
                            <h1 className='uppercase md:text-2xl text-2xl text-start font-bold text-white'>
                                As razões pelas quais você deveria  
                                <span className='border-b-2 border-b-yellow-600'> escolher</span> nossa empresa
                            </h1>

                            <p className='text-slate-200 text-lg'>
                                Construção participativa personalizada em ética de trabalho como parte de nossas melhores
                                 práticas de trabalho, e cada trabalhador fornecido com as habilidades 
                                 certas para tomar as melhores decisões.
                            </p>

                            <ul className="text-lg text-slate-200 ">
                                <li className="flex items-center gap-4">
                                    <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                                    <span>Nós Somos Criativos</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                                    <span>Honestos e Seguros</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                                    <span>Integridade</span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                                    <span>Estamos Sempre Melhorando</span>
                                </li>
                                
                                <li className="flex items-center gap-4">
                                    <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                                    <span>Comprometidos com Prazos</span>
                                </li>
                            </ul>
                        </div>
                    </div>
            </section>
        </>
    )
}