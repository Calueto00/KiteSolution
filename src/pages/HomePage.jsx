import { Link } from "react-router"
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Clock,
  Hammer,
  Paintbrush,
  ShieldCheck,
  UsersRound,
} from "lucide-react"
import teste from "../assets/images/teste.jpg"
import ProjectSection from "../components/ProjectSection"

function HomePage() {
  const highlights = [
    'Construção civil',
    'Remodelação',
    'Acabamentos modernos',
  ]

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

  const reasons = [
    {
      title: 'Qualidade garantida',
      description: 'Trabalhamos com atenção ao detalhe e materiais adequados a cada etapa.',
      icon: BadgeCheck,
    },
    {
      title: 'Prazos bem acompanhados',
      description: 'Organizamos a execução para reduzir atrasos e manter o cliente informado.',
      icon: Clock,
    },
    {
      title: 'Equipa qualificada',
      description: 'Profissionais preparados para obras, remodelações e manutenção.',
      icon: UsersRound,
    },
    {
      title: 'Segurança em obra',
      description: 'Priorizamos práticas responsáveis para proteger pessoas, espaços e resultados.',
      icon: ShieldCheck,
    },
  ]

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
      <section className="relative min-h-screen overflow-hidden bg-zinc-950">
        <img src={teste} className="absolute inset-0 h-full w-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-zinc-950 to-transparent"></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-end px-6 pb-14 pt-32 md:px-0 md:pb-20">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex w-fit border-l-4 border-[#dfb24a] bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">
              Kite Soluções Comércio e Serviços
            </span>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                Construímos o futuro. Acabamos com excelência.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                Soluções completas em construção civil, remodelação, manutenção e acabamentos modernos
                para projetos residenciais, comerciais e institucionais.
              </p>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-[#dfb24a] px-6 py-3 font-bold text-zinc-950 transition duration-300 hover:bg-[#f8e8a3]">
                Ver serviços
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center border border-white/25 bg-white/10 px-6 py-3 font-bold text-white transition duration-300 hover:border-[#dfb24a] hover:bg-zinc-950">
                Solicitar orçamento
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              {highlights.map((item) => (
                <span key={item} className="border border-white/15 bg-zinc-900/80 px-4 py-2 text-sm font-medium text-slate-100 shadow-lg">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16 md:px-0 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative min-h-[360px] overflow-hidden border border-slate-200 bg-white shadow-xl">
            <img src={teste} className="absolute inset-0 h-full w-full object-cover" alt="" />
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

      <ProjectSection />

      <section className="bg-zinc-950 px-6 py-16 md:px-0 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <span className="font-bold text-[#dfb24a]">Porquê escolher-nos</span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Trabalho sério, comunicação clara e resultados duradouros.
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Acompanhamos cada fase com responsabilidade para que a obra avance com organização,
              segurança e atenção ao que realmente importa para o cliente.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon

              return (
                <article key={reason.title} className="border border-white/10 bg-zinc-900 p-5 shadow-lg">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center bg-[#dfb24a] text-zinc-950">
                    <Icon size={21} strokeWidth={2.2} />
                  </div>
                  <h3 className="font-bold text-white">{reason.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-300">{reason.description}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-16 md:px-0 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-8 border border-slate-200 bg-white p-6 shadow-xl md:grid-cols-[1fr_0.9fr] md:items-center md:p-8">
          <div className="space-y-3">
            <span className="font-bold text-yellow-700">Pronto para começar?</span>
            <h2 className="text-3xl font-bold text-zinc-950 md:text-4xl">
              Tem algum projeto em mente?
            </h2>
            <p className="max-w-2xl leading-relaxed text-slate-600">
              Envie-nos a sua ideia ou pedido de orçamento. A nossa equipa ajuda a definir os próximos passos
              com clareza e profissionalismo.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-zinc-950 px-6 py-3 font-bold text-white transition duration-300 hover:bg-zinc-800">
              Falar connosco
              <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/244933767293" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center border border-zinc-300 px-6 py-3 font-bold text-zinc-950 transition duration-300 hover:border-[#dfb24a] hover:bg-[#dfb24a]">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
