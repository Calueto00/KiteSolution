import teste from '../assets/images/teste.jpg'
import whatsapp from '../assets/icons/whatsapp.svg'
import facebook from '../assets/icons/facebook.svg'

function ContactPage() {
  return (
    <>
      {/**header aboutpage */}
                  <div className='md:h-[100vh] h-[100vh] relative'>
                      <img src={teste} className='inset-0 h-full w-full object-fit' alt="" />
                      <div className="absolute inset-0 bg-black opacity-50"></div>
                      <div className="absolute z-10 inset-0">
                          <div className='h-full md:max-w-5xl mx-auto relative flex flex-col 
                          items-center justify-center md:space-y-3 space-y-4 md:p-0 p-6'>
                              <h1 className='md:text-5xl text-3xl font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                                      to-[#f8e8a3] bg-clip-text text-transparent'>Contacte - Nos</h1>
                                      <div className='bg-yellow-400 h-1 md:w-20'></div>

                                <div className="flex items-center flex-col md:flex-row w-full gap-4">
                                  <div className="flex-1 space-y-3 p-4 bg-zinc-900 md:p-8 rounded-lg border border-zinc-900 shadow-lg">
                                    <h2 className='md:text-2xl text-2xl font-bold text-white'>Entre em Contacto</h2>
                                    <ul className='space-y-3'>
                                      <li className='space-x-4 text-lg text-slate-100'>
                                        <span>icon phone</span>
                                        <span>(+244) 933767293</span>
                                      </li>
                                      <li className='space-x-4 text-lg text-slate-100'>
                                        <span>icon emai</span>
                                        <span>central.kitesolucoeslda@gmail.com</span>
                                      </li>
                                      <li className='space-x-4 text-lg text-slate-100'>
                                        <span>icon localização</span>
                                        <span>Maianga, Bairro Neves Bendinha, Machado Saldanha - casa nº 52</span>
                                      </li>
                                      <li className='space-x-4 text-lg flex text-slate-100'>
                                       <img className='w-5' src={facebook} alt="" />
                                        <span>facebook</span>
                                      </li>
                                      <li className='space-x-4 text-lg text-slate-100 flex'>
                                          <img className='w-5' src={whatsapp} alt="" />
                                        <span>(+244) 933767293</span>
                                      </li>
                                    </ul>
                                  </div>
                                  <form className="flex-1 space-y-3">
                                        <input type="text" className='outline-none bg-zinc-900 md:p-3 p-2 w-full rounded-lg placeholder-white' placeholder='nome...' />
                                        <input type="email" className='outline-none bg-zinc-900 md:p-3 p-2 w-full rounded-lg placeholder-white' placeholder='email...'/>
                                        <textarea name="message" className='outline-none h-25 bg-zinc-900 md:p-3 p-2 w-full rounded-lg placeholder-white' placeholder='mensagem...' id=""></textarea>
                                        <button className='bg-slate-200 rounded-lg px-6 py-3'>Enviar</button>
                                  </form>
                                </div>
                          </div>
                      </div>
                  </div> 
       
    </>
  )
}

export default ContactPage
