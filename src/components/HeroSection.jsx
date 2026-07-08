import about from '../assets/fotos/about.png';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

import {
  ArrowRight,
  
} from "lucide-react"

export default function HeroSection(){

    const highlights = [
    'Construção civil',
    'Remodelação',
    'Acabamentos modernos',
  ]
    return (
        <section className="relative min-h-screen overflow-hidden bg-zinc-950">
        <img loading='eager' src={about} className="absolute inset-0 h-full w-full object-cover" alt="" />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-zinc-950 to-transparent"></div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col justify-end px-6 pb-14 pt-32 md:px-0 md:pb-20">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex w-fit border-l-4 border-[#dfb24a] bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">
              Kite Soluções Comércio e Serviços
            </span>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity:0, x:-50 }}
                animate={{ opacity:1, x:0 }}
                transition={{ duration:2}}
                className="text-5xl font-bold  text-white md:text-7xl">
                Construímos o futuro. Acabamos com excelência.
              </motion.h1>
              <motion.p
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:2, delay:0.5 }}
                className="max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl">
                Soluções completas em construção civil, remodelação, manutenção e acabamentos modernos
                para projetos residenciais, comerciais e institucionais.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity:0, y:30 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:2, delay:1 }} 
              className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Link to="/services" className="inline-flex items-center justify-center gap-2 bg-[#dfb24a] px-6 py-3 font-bold text-zinc-950 transition duration-300 hover:bg-[#f8e8a3]">
                Ver serviços
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center border border-white/25 bg-white/10 px-6 py-3 font-bold text-white transition duration-300 hover:border-[#dfb24a] hover:bg-zinc-950">
                Solicitar orçamento
              </Link>
            </motion.div>

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
    )
}