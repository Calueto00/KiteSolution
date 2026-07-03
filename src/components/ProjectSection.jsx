import { useState } from 'react'
import { Link } from 'react-router'
import { ArrowRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import civil from '../assets/fotos/civil.jpg'
import edificio from '../assets/fotos/edificio.jpg'
import estuque from '../assets/fotos/estuque.jpg'
import remodelagem from '../assets/fotos/remodelagem.jpg'


export default function ProjectSection(){
    const projects = [
        {
            title: 'Remodelação residencial',
            category: 'Remodelação e acabamentos',
            location: 'Luanda, Angola',
            description: 'Modernização de espaços interiores com acabamento limpo, pintura e soluções funcionais.',
            image: remodelagem,
        },
        {
            title: 'Construção civil',
            category: 'Obra e estrutura',
            location: 'Luanda, Angola',
            description: 'Execução de trabalhos estruturais com foco em segurança, organização e qualidade.',
            image: civil,
        },
        {
            title: 'Acabamentos interiores',
            category: 'Estuque, gesso e pintura',
            location: 'Luanda, Angola',
            description: 'Aplicação de acabamentos para valorizar ambientes e preparar espaços para utilização.',
            image: estuque,
        },
        {
            title: 'Manutenção de edifício',
            category: 'Manutenção preventiva',
            location: 'Luanda, Angola',
            description: 'Intervenções técnicas para preservar a funcionalidade e segurança de edifícios.',
            image: edificio,
        },
    ]

    const [activeIndex, setActiveIndex] = useState(0)
    const activeProject = projects[activeIndex]

    function showPreviousProject() {
        setActiveIndex((currentIndex) => (
            currentIndex === 0 ? projects.length - 1 : currentIndex - 1
        ))
    }

    function showNextProject() {
        setActiveIndex((currentIndex) => (
            currentIndex === projects.length - 1 ? 0 : currentIndex + 1
        ))
    }

    return(
        <section className="bg-slate-100 px-6 py-16 md:px-0 md:py-20">
            <div className="mx-auto max-w-5xl space-y-10">
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div className="max-w-2xl space-y-3">
                        <span className='font-bold text-yellow-700'>Projectos realizados</span>
                        <h2 className='text-3xl font-bold text-zinc-950 md:text-4xl'>
                            Trabalhos que mostram o nosso compromisso com a excelência.
                        </h2>
                    </div>
                    <p className='max-w-sm leading-relaxed text-slate-600'>
                        Cada projeto reflete cuidado técnico, organização em obra e atenção aos detalhes que fazem diferença.
                    </p>
                </div>

                <div className="grid overflow-hidden border border-slate-200 bg-white shadow-xl md:grid-cols-[1.15fr_0.85fr]">
                    <div className="relative min-h-[340px] md:min-h-[500px]">
                        <img
                            className='absolute inset-0 h-full w-full object-cover'
                            src={activeProject.image}
                            alt={activeProject.title}
                        />
                        <div className="absolute inset-0 bg-black/35"></div>
                        <div className="absolute left-4 top-4 bg-zinc-950/85 px-4 py-2 text-sm font-semibold text-[#f8e8a3] md:left-6 md:top-6">
                            {activeIndex + 1} / {projects.length}
                        </div>
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 md:bottom-6 md:left-6 md:right-6">
                            <button
                                type="button"
                                onClick={showPreviousProject}
                                className="flex h-11 w-11 items-center justify-center bg-white text-zinc-950 shadow-lg transition duration-300 hover:bg-[#dfb24a]"
                                aria-label="Projecto anterior"
                            >
                                <ChevronLeft size={22} />
                            </button>
                            <button
                                type="button"
                                onClick={showNextProject}
                                className="flex h-11 w-11 items-center justify-center bg-white text-zinc-950 shadow-lg transition duration-300 hover:bg-[#dfb24a]"
                                aria-label="Próximo projecto"
                            >
                                <ChevronRight size={22} />
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between bg-zinc-950 p-5 text-white md:p-7">
                        <div className="space-y-5">
                            <div className="space-y-3">
                                <span className="font-bold text-[#dfb24a]">{activeProject.category}</span>
                                <h3 className="text-3xl font-bold leading-tight md:text-4xl">
                                    {activeProject.title}
                                </h3>
                                <p className="flex items-center gap-2 text-slate-300">
                                    <MapPin size={18} className="text-[#dfb24a]" />
                                    {activeProject.location}
                                </p>
                                <p className="leading-relaxed text-slate-300">
                                    {activeProject.description}
                                </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-1">
                                {projects.map((project, index) => (
                                    <button
                                        key={project.title}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        className={`border p-4 text-left transition duration-300 ${
                                            index === activeIndex
                                                ? 'border-[#dfb24a] bg-[#dfb24a] text-zinc-950'
                                                : 'border-white/10 bg-zinc-900 text-slate-200 hover:border-[#dfb24a]'
                                        }`}
                                    >
                                        <span className="block text-sm font-semibold">{project.category}</span>
                                        <span className="mt-1 block font-bold">{project.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Link to="/contact" className="mt-6 inline-flex w-fit items-center gap-2 bg-white px-6 py-3 font-bold text-zinc-950 transition duration-300 hover:bg-[#f8e8a3]">
                            Solicitar orçamento
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
