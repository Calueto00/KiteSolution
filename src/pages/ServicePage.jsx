import { Link } from 'react-router'
import {
    BrickWall,
    Building2,
    CheckCircle2,
    Clock,
    Droplets,
    Hammer,
    Layers,
    Paintbrush,
    PlugZap,
    ShieldCheck,
    Wrench,
} from 'lucide-react'
import estuque from '../assets/fotos/estuque.jpg'
import about from '../assets/fotos/about.png'

export default function ServicePage(){

    const services = [
        {
            title: 'Construção Civil',
            description: 'Executamos obras residenciais, comerciais e institucionais com qualidade e segurança.',
            icon: Building2,
        },
        {
            title: 'Remodelação e Reabilitação',
            description: 'Modernizamos imóveis e valorizamos espaços com soluções funcionais e bem acabadas.',
            icon: Hammer,
        },
        {
            title: 'Teto Falso e Pladur',
            description: 'Instalamos tetos falsos e divisórias em pladur com acabamento limpo e estético.',
            icon: Layers,
        },
        {
            title: 'Estuque e Gesso',
            description: 'Aplicamos estuque e gesso para superfícies lisas, resistentes e prontas para acabamento.',
            icon: Wrench,
        },
        {
            title: 'Pintura Interior e Exterior',
            description: 'Realizamos pinturas profissionais com materiais de qualidade e proteção duradoura.',
            icon: Paintbrush,
        },
        {
            title: 'Ladrilho e Pavimentos',
            description: 'Assentamos ladrilhos, cerâmicas e pavimentos com precisão e cuidado no detalhe.',
            icon: CheckCircle2,
        },
        {
            title: 'Canalização',
            description: 'Projetamos, instalamos e fazemos manutenção de sistemas hidráulicos com segurança.',
            icon: Droplets,
        },
        {
            title: 'Instalações Elétricas',
            description: 'Executamos instalações elétricas residenciais e comerciais segundo normas técnicas.',
            icon: PlugZap,
        },
        {
            title: 'Alvenaria',
            description: 'Construímos estruturas de alvenaria com materiais confiáveis e execução cuidada.',
            icon: BrickWall,
        },
        {
            title: 'Manutenção de Edifícios',
            description: 'Prestamos manutenção preventiva e corretiva para manter edifícios funcionais.',
            icon: ShieldCheck,
        },

    ]

    const highlights = [
        'Orçamentação clara',
        'Equipa qualificada',
        'Acompanhamento de obra',
    ]

    const reasons = [
        {
            title: 'Planeamento responsável',
            description: 'Organizamos cada fase da obra para reduzir atrasos, desperdícios e decisões improvisadas.',
            icon: Clock,
        },
        {
            title: 'Qualidade no acabamento',
            description: 'Cuidamos dos detalhes finais para entregar espaços modernos, seguros e prontos a usar.',
            icon: CheckCircle2,
        },
        {
            title: 'Segurança e confiança',
            description: 'Trabalhamos com práticas seguras, comunicação transparente e compromisso com o cliente.',
            icon: ShieldCheck,
        },
    ]

    return(
        <>
            <section className='relative min-h-[72vh] overflow-hidden bg-zinc-950'>
                <img src={estuque} className='absolute inset-0 h-full w-full object-cover' alt="" />
                <div className="absolute inset-0 bg-black/65"></div>
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-zinc-950 to-transparent"></div>

                <div className="relative z-10 mx-auto flex min-h-[72vh] max-w-5xl flex-col justify-end px-6 pb-12 pt-28 md:px-0 md:pb-16">
                    <div className="max-w-3xl space-y-5">
                        <span className="inline-flex w-fit border-l-4 border-[#dfb24a] bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">
                            Serviços especializados
                        </span>
                        <h1 className='text-4xl font-bold leading-tight text-white md:text-6xl'>
                            Soluções completas para construir, renovar e manter.
                        </h1>
                        <p className="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                            Da estrutura aos acabamentos, a Kite Soluções entrega obras com rigor técnico,
                            estética cuidada e foco na tranquilidade do cliente.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            {highlights.map((item) => (
                                <span key={item} className="border border-white/15 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-slate-100 shadow-lg">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-slate-100 px-6 py-16 md:px-0 md:py-20'>
                <div className="mx-auto max-w-5xl space-y-10">
                    <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                        <div className="max-w-2xl space-y-3">
                            <span className='font-bold text-yellow-700'>O que fazemos</span>
                            <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
                                Serviços pensados para cada etapa da obra
                            </h2>
                        </div>
                        <p className="max-w-sm text-slate-600">
                            Atuamos com equipas preparadas para projetos novos, remodelações e manutenção contínua.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon

                            return (
                                <article
                                    className='group flex min-h-48 flex-col justify-between border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#dfb24a] hover:shadow-xl'
                                    key={service.title}
                                >
                                    <div className="space-y-4">
                                        <div className="flex h-11 w-11 items-center justify-center bg-zinc-950 text-[#dfb24a] transition duration-300 group-hover:bg-[#dfb24a] group-hover:text-zinc-950">
                                            <Icon size={23} strokeWidth={2.1} />
                                        </div>
                                        <h3 className='text-xl font-bold leading-snug text-zinc-950'>{service.title}</h3>
                                    </div>
                                    <p className='mt-4 leading-relaxed text-slate-600'>{service.description}</p>
                                </article>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='bg-zinc-950 px-6 py-16 md:px-0 md:py-20'>
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                    <div className="relative min-h-[360px] overflow-hidden border border-white/10 shadow-2xl">
                        <img src={about} className='absolute inset-0 h-full w-full object-cover' alt="" />
                        <div className="absolute inset-0 bg-black/45"></div>
                        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6 pt-24">
                            <p className="text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">Kite Soluções</p>
                            <h2 className="mt-2 text-3xl font-bold text-white">
                                Execução séria para resultados duradouros.
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-7">
                        <div className="space-y-3">
                            <span className='font-bold text-[#dfb24a]'>Porquê escolher-nos</span>
                            <h2 className='text-3xl font-bold text-white md:text-4xl'>
                                Uma equipa próxima, técnica e comprometida.
                            </h2>
                            <p className='text-lg leading-relaxed text-slate-300'>
                                Combinamos experiência de obra, comunicação objetiva e cuidado com cada detalhe
                                para que o processo seja mais simples do primeiro contacto à entrega final.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {reasons.map((reason) => {
                                const Icon = reason.icon

                                return (
                                    <div key={reason.title} className="flex gap-4 border border-white/10 bg-zinc-900 p-4 shadow-lg">
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#dfb24a] text-zinc-950">
                                            <Icon size={21} strokeWidth={2.2} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white">{reason.title}</h3>
                                            <p className="mt-1 leading-relaxed text-slate-300">{reason.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <Link to="/contact" className="inline-flex bg-[#dfb24a] px-6 py-3 font-bold text-zinc-950 transition duration-300 hover:bg-[#f8e8a3]">
                            Solicitar orçamento
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}
