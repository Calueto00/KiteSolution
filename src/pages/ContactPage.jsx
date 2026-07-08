import about from '../assets/fotos/about.png';
import whatsapp from '../assets/icons/whatsapp.svg'
import facebook from '../assets/icons/facebook.svg'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import location from '../assets/icons/location.svg'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

import { motion } from 'framer-motion';

function ContactPage() {
  const form = useRef();
  const contacts = [
    {
      label: 'Telefone',
      value: '(+244) 933 767 293',
      href: 'tel:+244933767293',
      icon: phone,
    },
    {
      label: 'Email',
      value: 'info@kitesolucoes.com',
      href: 'mailto:info@kitesolucoes.com',
      icon: email,
    },
    {
      label: 'Localização',
      value: 'Maianga, Bairro Neves Bendinha, Machado Saldanha - casa nº 52',
      href: 'https://www.google.com/maps/search/?api=1&query=Maianga%20Bairro%20Neves%20Bendinha%20Machado%20Saldanha%20casa%2052',
      icon: location,
    },
  ]

  const socials = [
    {
      label: 'Facebook',
      href: 'https://web.facebook.com/central.kitesolucoeslda',
      icon: facebook,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/244933767293',
      icon: whatsapp,
    },
  ]

  

  const sendEmail = (e) => {
        e.preventDefault();
      

        emailjs.sendForm(
            "service_3ximsix",
            "template_1r4ebp3",
            form.current,
            "PdTC9Mbem87i71DE6"
        ).then(() => alert("Email sent successfully"),
         () => alert("Failed to send email, please try again later"))
    }

  return (
    <>
      <section className='relative min-h-[90vh] overflow-hidden bg-zinc-950'>
        <img src={about} className='absolute inset-0 h-full w-full object-cover object-top' alt="" />
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="absolute inset-x-0 bottom-0 h-24 "></div>

        <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-5xl flex-col justify-end px-6 pb-12 pt-28 md:px-0">
          <motion.div 
          initial={{opacity:0, y:40}}
          animate={{opacity:1, y:0}}
          transition={{duration:1}}
          className="max-w-3xl space-y-4">
            <span className="inline-flex w-fit border-l-4 border-[#dfb24a] bg-white/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-[#f8e8a3]">
              Contacto
            </span>
            <h1 className='text-4xl font-bold leading-tight text-white md:text-6xl'>
              Fale connosco sobre a sua próxima obra.
            </h1>
            <p className='max-w-2xl text-lg leading-relaxed text-slate-200 md:text-xl'>
              Partilhe a sua ideia, necessidade ou pedido de orçamento. A nossa equipa responde com orientação clara e profissional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className='bg-slate-100 px-6 py-16 md:px-0 md:py-20'>
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div className="space-y-6">
            <motion.div 
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1}}
            className="space-y-3">
              <span className='font-bold text-yellow-700'>Entre em contacto</span>
              <h2 className='text-3xl font-bold text-zinc-950 md:text-4xl'>
                Estamos prontos para ouvir o seu projeto.
              </h2>
              <p className='leading-relaxed text-slate-600'>
                Pode contactar-nos por chamada, email ou WhatsApp. Para pedidos de orçamento,
                envie uma breve descrição do serviço pretendido e a localização da obra.
              </p>
            </motion.div>

            <motion.div 
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:1}}
            className="space-y-3">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === 'Localização' ? '_blank' : undefined}
                  rel={item.label === 'Localização' ? 'noreferrer' : undefined}
                  className='flex gap-4 border border-slate-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#dfb24a] hover:shadow-lg'
                >
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center bg-zinc-950'>
                    <img className='h-5 w-5' src={item.icon} alt="" />
                  </span>
                  <span>
                    <span className='block font-bold text-zinc-950'>{item.label}</span>
                    <span className='mt-1 block leading-relaxed text-slate-600'>{item.value}</span>
                  </span>
                </a>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className='inline-flex items-center gap-3 border border-zinc-200 bg-white px-4 py-3 font-semibold text-zinc-950 shadow-sm transition duration-300 hover:border-[#dfb24a] hover:bg-zinc-950 hover:text-white'
                >
                  <img className='h-5 w-5' src={item.icon} alt="" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{opacity:0, x:30}}
            whileInView={{opacity:1, x:0}}
            transition={{duration:1}}
           ref={form} onSubmit={sendEmail} className="border border-zinc-900 bg-zinc-950 p-5 shadow-2xl md:p-7">
            <div className="mb-6 space-y-2">
              <span className='font-bold text-[#dfb24a]'>Pedido rápido</span>
              <h2 className='text-2xl font-bold text-white'>Envie-nos uma mensagem</h2>
              <p className='text-slate-300'>
                Responderemos assim que possível com os próximos passos.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-200' htmlFor="name">Nome</label>
                <input
                  id="name"
                  type="text"
                  name='name'
                  className='w-full border border-white/10 bg-zinc-900 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#dfb24a]'
                  placeholder='O seu nome'
                />
              </div>

              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-200' htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name='email'
                  className='w-full border border-white/10 bg-zinc-900 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#dfb24a]'
                  placeholder='email'
                />
              </div>

              

              <div>
                <label className='mb-2 block text-sm font-semibold text-slate-200' htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  className='min-h-36 w-full resize-none border border-white/10 bg-zinc-900 p-3 text-white outline-none transition placeholder:text-slate-500 focus:border-[#dfb24a]'
                  placeholder='Conte-nos que serviço precisa e onde será realizado.'
                ></textarea>
              </div>

              <button type="submit" className='w-full bg-[#dfb24a] px-6 py-3 font-bold text-zinc-950 transition duration-300 hover:bg-[#f8e8a3] md:w-auto'>
                Enviar mensagem
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  )
}

export default ContactPage
