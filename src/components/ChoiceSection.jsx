

import {
  BadgeCheck,
  Clock,
  ShieldCheck,
  UsersRound,
} from "lucide-react"

export default function ChoiceSection(){

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
    return (
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
    )
}