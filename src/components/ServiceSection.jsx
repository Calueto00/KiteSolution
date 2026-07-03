import { Link } from "react-router"
import {
  ArrowRight,
  Building2,
  Hammer,
  Paintbrush,
  
} from "lucide-react"

export default function ServiceSection(){

    

    const services = [
    {
      title: 'Construção Civil',
      description: 'Obras residenciais, comerciais e institucionais com execução segura e acompanhamento profissional.',
      icon: Building2,
    },
    {
      title: 'Remodelação',
      description: 'Transformamos espaços existentes em ambientes modernos, funcionais e valorizados.',
      icon: Hammer,
    },
    {
      title: 'Acabamentos',
      description: 'Pintura, estuque, gesso, ladrilhos e detalhes finais com cuidado técnico.',
      icon: Paintbrush,
    },
  ]

    return(
        <section className="bg-white px-6 py-16 md:px-0 md:py-20">
                <div className="mx-auto max-w-5xl space-y-10">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
                    <div className="max-w-2xl space-y-3">
                      <span className="font-bold text-yellow-700">Nossos serviços</span>
                      <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
                        O essencial para a sua obra, num só lugar.
                      </h2>
                    </div>
                    <p className="max-w-sm leading-relaxed text-slate-600">
                      Da construção ao acabamento, entregamos soluções práticas para diferentes tipos de projeto.
                    </p>
                  </div>
        
                  <div className="grid gap-4 md:grid-cols-3">
                    {services.map((service) => {
                      const Icon = service.icon
        
                      return (
                        <article key={service.title} className="group flex min-h-56 flex-col justify-between border border-slate-200 bg-slate-100 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#dfb24a] hover:shadow-xl">
                          <div className="space-y-4">
                            <div className="flex h-11 w-11 items-center justify-center bg-zinc-950 text-[#dfb24a] transition duration-300 group-hover:bg-[#dfb24a] group-hover:text-zinc-950">
                              <Icon size={23} strokeWidth={2.1} />
                            </div>
                            <h3 className="text-xl font-bold leading-snug text-zinc-950">{service.title}</h3>
                          </div>
                          <p className="mt-4 leading-relaxed text-slate-600">{service.description}</p>
                        </article>
                      )
                    })}
                  </div>
        
                  <Link to="/services" className="inline-flex items-center gap-2 bg-[#dfb24a] px-6 py-3 font-bold text-zinc-950 transition duration-300 hover:bg-[#f8e8a3]">
                    Ver todos os serviços
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </section>
    )
}