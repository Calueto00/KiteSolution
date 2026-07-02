import { Link } from "react-router"
import teste from '../assets/images/teste.jpg'
export default function AboutSection(){

    return (
        <>
            <section className="md:h-screen h-[90vh] bg-zinc-900 p-6 md:p-0">
                <div className="max-w-5xl mx-auto md:h-full h-full flex md:flex-row flex-col justify-center items-center gap-10">
                        <div className=" md:flex-1 md:h-1/2 relative w-full h-1/2">
                            <div className="bg-[#f1ce67] h-1/2 w-1/2 absolute md:top-0 md:right-0 top-10 right-10"></div>
                            <img 
                                className="absolute z-10 md:left-0 md:w-[97%] md:h-[96%] h-[85%] w-[85%] bottom-0"
                                src={teste} alt="foto" />
                        </div>
                        <div className="flex-1 space-y-3">
                            <span className="bg-[#f1ce67] bg-clip-text text-transparent text-sm">Sobre Nós</span>
                            <h2 className="md:text-4xl text-2xl font-bold text-white">Quem Somos?</h2>

                            <p className="text-lg text-slate-200">
                                A Kite Soluções Comércio e Serviços é uma 
                                empresa especializada em construção civil, remodelação, manutenção e acabamentos modernos.
                            </p>

                            <p className="text-lg text-slate-200">
                                Construímos, reabilitamos e transformamos espaços, oferecendo soluções 
                                completas para projectos residenciais, comerciais e institucionais.
                            </p>

                            <div className="">
                                    <Link 
                                        className="px-6 py-2 rounded-lg bg-[#f1ce67] mt-2"
                                        to={'/about'}>Saber Mais</Link>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}