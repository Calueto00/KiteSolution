import teste from '../assets/images/teste.jpg'
import { Link } from 'react-router'

export default function ContactSection(){
    return(
        <section className="flex md:h-[50vh] h-[50vh] bg-zinc-950 relative">
            <div className="w-1/2 h-full relative">
                <img className='h-full md:object-fit object-cover w-full' src={teste} alt="" />
                <div className="bg-black opacity-40 absolute inset-0"></div>
            </div>
            <div className="bg-slate-100 absolute md:top-12 top-25 z-10 md:h-[70%] md:w-1/2 p-6 md:p-0 text-center 
            md:right-88 right-12 w-[80%] rounded-lg border-r-5 border-t-5 shadow-lg border-yellow-600 
            flex flex-col items-center justify-center md:space-y-3 space-y-2">
                <h3 className='md:text-3xl text-2xl font-bold'>Tem algum projecto em mente?</h3>
                <p className='md:text-lg text-slate-600'>Na Kite Soluções transformamos ideias em obras de excelência.</p>
                <Link to={'https://wa.me/244933767293'}>
                    <button className='rounded-lg bg-zinc-900 text-slate-200 md:px-6 px-4 py-1 cursor-pointer
                    md:py-2 hover:scale-105 delay-150 duration-300 transition-ease-in-out'>
                        Solicitar Orçamento
                    </button>
                </Link>

            </div>
        </section>
    )
}