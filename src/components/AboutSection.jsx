import { Link } from "react-router"
import {
  ArrowRight,
  
} from "lucide-react"

import about2 from '../assets/fotos/about2.png'
export default function AboutSection(){

    const stats = [
        {
          value: 'Obras',
          label: 'do início ao acabamento',
        },
        {
          value: 'Soluções',
          label: 'para residências e empresas',
        },
        {
          value: 'Apoio',
          label: 'próximo em cada projeto',
        },
      ]
    return (
        <>
            <section className="bg-slate-100 px-6 py-16 md:px-0 md:py-20">
                <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                <div className="relative min-h-[360px] overflow-hidden border border-slate-200 bg-white shadow-xl">
                    <img src={about2} className="absolute inset-0 h-full w-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/45"></div>
                    <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6 pt-24">
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">Kite Soluções</p>
                    <h2 className="mt-2 text-3xl font-bold text-white">
                        Planeamento, execução e acabamento no mesmo nível de cuidado.
                    </h2>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                    <span className="font-bold text-yellow-700">Sobre nós</span>
                    <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
                        Transformamos projetos em espaços seguros e funcionais.
                    </h2>
                    <p className="text-lg leading-relaxed text-slate-600">
                        Atuamos com uma equipa comprometida em entregar obras com qualidade, segurança e eficiência,
                        desde a fundação até aos acabamentos finais.
                    </p>
                    <p className="leading-relaxed text-slate-600">
                        Trabalhamos lado a lado com cada cliente para entender necessidades, propor soluções realistas
                        e criar resultados que valorizam imóveis e simplificam o processo.
                    </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.value} className="border border-slate-200 bg-white p-4 shadow-sm">
                        <strong className="block text-lg text-zinc-950">{item.value}</strong>
                        <span className="mt-1 block text-sm leading-relaxed text-slate-600">{item.label}</span>
                        </div>
                    ))}
                    </div>

                    <Link to="/about" className="inline-flex items-center gap-2 bg-zinc-950 px-6 py-3 font-bold text-white transition duration-300 hover:bg-zinc-800">
                    Conhecer a empresa
                    <ArrowRight size={18} />
                    </Link>
                </div>
                </div>
            </section>
        </>
    )
}