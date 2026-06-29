import teste from '../assets/images/teste.jpg'
import { Link } from 'react-router'

export default function ProjectSection(){

    return(
        <section className="h-[90vh] bg-slate-100">
            <div className="max-w-5xl mx-auto h-full flex items-center gap-8 justify-center">
                <div className="flex-1 space-y-3">
                    <span className='text-yellow-600 font-bold'>Projectos realizados</span>
                    <h2 className='text-4xl font-bold'>Transformamos ideias em obras de excelência</h2>

                    <p className='text-lg text-gray-600'>Cada projeto representa o 
                        nosso compromisso com a qualidade, inovação e satisfação dos clientes. 
                        Conheça alguns dos trabalhos realizados pela 
                        <span className='font-medium text-black'>Kite Soluções</span>,
                        onde cada detalhe reflete o nosso profissionalismo e dedicação.
                    </p>
                    
                    <div className='mt-3'>
                        <Link to={'/contact'}>
                            <button className='hover:scale-110 hover:bg-zinc-800 cursor-pointer delay-150 duration-300 transition-all transform bg-black text-white px-6 py-2 rounded-lg'>
                                Entre em contacto
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 h-1/2 relative">
                    <img 
                        className='inset-0 object-fit h-full w-full'
                        src={teste} alt="" />

                    <div className='bg-black inset-0 z-10 absolute opacity-40'></div>

                    <div className='absolute z-20 bottom-0 space-x-1 p-2'>
                        <button className='bg-white px-2'>1</button>
                        <button className='bg-white px-2'>2</button>
                    </div>
                </div>
            </div>
        </section>
    )
}