import teste from '../assets/images/teste.jpg'

function AboutPage() {
  return (
    <>
      {/**header aboutpage */}
      <div className='md:h-[80vh] relative '>
          <img src={teste} className='inset-0 h-full w-full object-fit ' alt="" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute z-10 inset-0">
            <div className='h-full md:max-w-5xl mx-auto relative flex items-center justify-center'>
                <h1 className='md:text-5xl text-4xl font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                        to-[#f8e8a3] bg-clip-text text-transparent md:absolute md:bottom-6 md:left-0'>Sobre Nós</h1>
            </div>
          </div>
      </div>

      {/** section about */}
      <section className='md:h-screen bg-slate-100 md:p-0 p-6'>
        <div className="md:max-w-5xl mx-auto md:h-full flex md:flex-col justify-center relative">
          <div className="md:h-[80vh] h-[55vh] md:w-1/2 relative">
              <img src={teste} className='h-full w-full object-fit object-center' alt="" />
              <div className="absolute bg-black opacity-50 inset-0"></div>
          </div>
          <div className=" md:flex-1 bg-black absolute z-20 md:w-1/2 w-[80%] md:top-30 top-15 md:right-20
           rounded-lg shadow-md bg-white border border-slate-200 md:p-8 p-4 space-y-3 md:space-y-3">
              <span className='text-yellow-600'>Kite Soluções</span>
              <h2 className='md:text-3xl text-2xl font-bold'>Transformamos Projetos em Realidade</h2>

              <p className='md:text-lg text-slate-600'>
                Contamos com uma equipa qualificada e comprometida, preparada para executar obras com elevados padrões de qualidade,
                 segurança e eficiência, desde a fundação até ao acabamento.
              </p>

              <p className='md:text-lg text-slate-600'>
                Cada projeto é único. Por isso, trabalhamos lado a lado com os nossos clientes para transformar ideias em realidade,
                 criando espaços modernos, funcionais e valorizados.
              </p>
          </div>
        </div>
      </section>

      {/** mission and values */}
      <section className='md:h-[80vh] bg-zinc-950 md:p-0 p-6'>
        <div className="md:max-w-5xl mx-auto flex items-center flex-col md:flex-row justify-center h-full md:gap-8 gap-6">
          <div className="flex-1 md:space-y-2 space-y-3">
              <div className='border border-zinc-900  shadow-md shadow-zinc-900 rounded bg-zinc-800 md:p-4 space-y-3 p-3'>
                    <h3 className='font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                            to-[#f8e8a3] bg-clip-text text-transparent text-2xl'>
                      Missão 
                  </h3>

                  <p className='md:text-lg text-slate-200'>
                    Prestar serviços de construção civil, remodelação e acabamentos com elevados padrões de qualidade, segurança e eficiência,
                    contribuindo para a valorização dos imóveis e para satisfação dos nossos clientes.
                  </p>
              </div>

              <div className='border border-zinc-900  shadow-md shadow-zinc-900 rounded bg-zinc-800 md:p-4 p-3 space-y-3'>
                    <h3 className='font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                            to-[#f8e8a3] bg-clip-text text-transparent text-2xl'>
                      Visão
                  </h3>

                  <p className='md:text-lg text-slate-200'>
                    Ser uma referência no setor da construção civil em Angola, reconhecida pela excelência dos seus serviços, inovação, confiança 
                    e compromisso com os clientes.
                  </p>
              </div>
          </div>
          <div className="md:flex-1 w-full border border-zinc-900  shadow-md shadow-zinc-900 rounded bg-zinc-800 md:p-4 p-3">
              <h4 className='md:text-xl font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                            to-[#f8e8a3] bg-clip-text text-transparent text-2xl'>Nossos Valores</h4>
              <ul className="text-lg text-slate-200">
                    <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Qualidade</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Profissionalismo</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Integridade</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Segurança</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Inovação</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Responsibilidade</span>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Compromisso com o cliente</span>
                    </li>
                </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
