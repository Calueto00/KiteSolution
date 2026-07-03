
import { Link } from 'react-router'
import {
  ArrowRight
} from "lucide-react"

export default function ContactSection(){
    return(
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
    )
}