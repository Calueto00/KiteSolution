import teste from '../assets/images/teste.jpg';
import { Link } from 'react-router';

export default function HeroSection(){
    return (
        <section className="md:h-screen h-[70vh] relative">
            <div className='relative md:h-screen h-full'>
                <img 
                src={teste} 
                className='inset-0 object-fit h-full w-full'
                alt="foto" />

                <div className='bg-black opacity-70 absolute z-10 inset-0'></div>
            </div>
            <div className=" md:h-screen inset-0 absolute z-20 top-0">
               <div className='md:h-full h-full max-w-5xl mx-auto flex flex-col justify-center md:space-y-6'>
                    <div className=" p-6 flex flex-col md:justify-center md:text-start text-center md:space-y-3 space-y-3">
                        <h1 className='md:text-7xl text-5xl font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                        to-[#f8e8a3] bg-clip-text text-transparent'>Kite Soluções</h1>
                        <h2 className='md:text-5xl text-3xl font-bold text-white'>Comércio e Serviços</h2>
                        <p className='text-[#cfcfcf] md:text-3xl text-2xl font-semibold'>Construímos o Futuro</p>
                        <p className='text-[#cfcfcf] md:text-3xl text-2xl font-semibold'>Acabamos com Excelência.</p>

                        <div className='mt-6 md:space-x-3 space-x-2'>
                            <Link 
                                
                                to={'/services'}>
                                    <button className=' rounded-lg md:px-6 px-4 md:py-3 py-2 text-lg 
                                text-white cursor-pointer bg-[#ffbf18] delay-150 duration-300 transition-ease-in-out hover:scale-105'>Serviços</button>
                                </Link>
                            <Link 
                                
                                to={'/contact'}>
                                    <button className=' rounded-lg md:px-6 px-4 md:py-3 py-2 text-lg cursor-pointer 
                                        text-white border-yellow-[#ffbf18] border delay-150 duration-300 transition-ease-in-out hover:scale-105'>
                                        Contacto
                                    </button>
                                </Link>
                        </div>
                    </div>
                    
               </div>
            </div>
        </section>
    )
}