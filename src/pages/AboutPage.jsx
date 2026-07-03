import {
  Award,
  BadgeCheck,
  Eye,
  Gem,
  Handshake,
  ShieldCheck,
  Target,
  UsersRound,
} from 'lucide-react'
import teste from '../assets/images/teste.jpg'

function AboutPage() {
  const stats = [
    {
      value: 'Qualidade',
      label: 'em cada fase da obra',
    },
    {
      value: 'Segurança',
      label: 'como prioridade diária',
    },
    {
      value: 'Compromisso',
      label: 'com prazos e clientes',
    },
  ]

  const principles = [
    {
      title: 'Missão',
      description: 'Prestar serviços de construção civil, remodelação e acabamentos com elevados padrões de qualidade, segurança e eficiência.',
      icon: Target,
    },
    {
      title: 'Visão',
      description: 'Ser uma referência no setor da construção civil em Angola, reconhecida pela excelência, inovação, confiança e compromisso.',
      icon: Eye,
    },
  ]

  const values = [
    {
      title: 'Qualidade',
      icon: Award,
    },
    {
      title: 'Profissionalismo',
      icon: BadgeCheck,
    },
    {
      title: 'Integridade',
      icon: Handshake,
    },
    {
      title: 'Segurança',
      icon: ShieldCheck,
    },
    {
      title: 'Inovação',
      icon: Gem,
    },
    {
      title: 'Responsabilidade',
      icon: UsersRound,
    },
  ]

  return (
    <>
      <section className='relative min-h-[64vh] overflow-hidden bg-zinc-950'>
        <img src={teste} className='absolute inset-0 h-full w-full object-cover' alt="" />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-slate-100 to-transparent"></div>

        <div className="relative z-10 mx-auto flex min-h-[64vh] max-w-5xl flex-col justify-end px-6 pb-12 pt-28 md:px-0 md:pb-16">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex w-fit border-l-4 border-[#dfb24a] bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">
              Sobre a Kite Soluções
            </span>
            <h1 className='text-4xl font-bold leading-tight text-white md:text-6xl'>
              Construímos confiança através de obras bem executadas.
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl'>
              Somos uma equipa focada em transformar ideias em espaços seguros, funcionais e valorizados,
              com atenção ao detalhe desde a primeira conversa até à entrega final.
            </p>
          </div>
        </div>
      </section>

      <section className='bg-slate-100 px-6 py-16 md:px-0 md:py-20'>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="relative min-h-[360px] overflow-hidden border border-slate-200 bg-white shadow-xl">
            <img src={teste} className='absolute inset-0 h-full w-full object-cover' alt="" />
            <div className="absolute inset-0 bg-black/45"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent p-6 pt-24">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">Kite Soluções</p>
              <h2 className="mt-2 text-3xl font-bold text-white">
                Do planeamento ao acabamento, cuidamos do processo.
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <span className='font-bold text-yellow-700'>Quem somos</span>
              <h2 className='text-3xl font-bold text-zinc-950 md:text-4xl'>
                Uma empresa preparada para obras exigentes.
              </h2>
              <p className='text-lg leading-relaxed text-slate-600'>
                Contamos com uma equipa qualificada e comprometida, preparada para executar obras com elevados
                padrões de qualidade, segurança e eficiência, desde a fundação até ao acabamento.
              </p>
              <p className='leading-relaxed text-slate-600'>
                Cada projeto é tratado como único. Trabalhamos lado a lado com os nossos clientes para entender
                necessidades, propor soluções realistas e criar espaços modernos, funcionais e valorizados.
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
          </div>
        </div>
      </section>

      <section className='bg-zinc-950 px-6 py-16 md:px-0 md:py-20'>
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className='font-bold text-[#dfb24a]'>O que nos guia</span>
            <h2 className='text-3xl font-bold text-white md:text-4xl'>
              Princípios claros para entregar melhor.
            </h2>
            <p className='leading-relaxed text-slate-300'>
              A nossa forma de trabalhar combina rigor técnico, responsabilidade e proximidade com o cliente.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {principles.map((item) => {
              const Icon = item.icon

              return (
                <article key={item.title} className="border border-white/10 bg-zinc-900 p-5 shadow-lg">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center bg-[#dfb24a] text-zinc-950">
                    <Icon size={23} strokeWidth={2.2} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-300">{item.description}</p>
                </article>
              )
            })}
          </div>

          <div className="border border-white/10 bg-zinc-900 p-5 shadow-lg md:p-6">
            <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <span className='font-bold text-[#dfb24a]'>Nossos valores</span>
                <h3 className='mt-2 text-2xl font-bold text-white'>A base de cada decisão</h3>
              </div>
              <p className="max-w-sm leading-relaxed text-slate-300">
                Estes valores orientam a relação com clientes, fornecedores e equipa em obra.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.title} className="flex items-center gap-3 border border-white/10 bg-zinc-950 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#dfb24a] text-zinc-950">
                      <Icon size={20} strokeWidth={2.2} />
                    </span>
                    <span className="font-semibold text-slate-100">{item.title}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
