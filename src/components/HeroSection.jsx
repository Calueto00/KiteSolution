import teste from '../assets/images/teste.jpg';
import { Link } from 'react-router';

export default function HeroSection(){
    return (
        <section className=" relative">
            <div className='relative h-screen'>
                <img 
                src={teste} 
                className='inset-0 object-fit h-full w-full'
                alt="foto" />

                <div className='bg-black opacity-70 absolute z-10 inset-0'></div>
            </div>
            <div className=" h-screen inset-0 absolute z-20 top-0">
               <div className='h-full max-w-5xl mx-auto flex flex-col justify-center space-y-6'>
                    <div className="h-1/2 w-1/2 p-6 border-l-5 flex flex-col justify-center rounded-lg border-t-5 border-b-5 border-yellow-600 space-y-2">
                        <h1 className='md:text-6xl font-bold bg-linear-to-r from-[#c28e2c] via-[#dfb24a] 
                        to-[#f8e8a3] bg-clip-text text-transparent'>Kite Soluções</h1>
                        <p className='text-[#cfcfcf] text-4xl font-semibold'>Construímos o Futuro</p>
                        <p className='text-white text-4xl font-semibold'>Acabamos com Excelência.</p>

                        <div className='mt-6'>
                            <Link 
                                className=' rounded-lg px-6 py-3 text-lg 
                                text-white bg-[#ffbf18]'
                                to={'/contact'}>Entre em contacto</Link>
                        </div>
                    </div>
                    <div className='space-x-6'>
                        <button className='border-white border p-4 text-white rounded-lg '>Preview</button>
                        <button className='border-white border p-4 text-white rounded-lg '>Next</button>
                    </div>
               </div>
            </div>
        </section>
    )
}