import teste from '../assets/images/teste.jpg'

export default function ChoiceSection(){
    return (
        <section className="h-[80vh] bg-zinc-900 flex items-center justify-center text-white ">
            <div className="h-full flex-1 relative">
                <img 
                    src={teste} 
                    className='inset-0 h-full object-fit'
                    alt="" />
            </div>
            <div className="flex-1 space-y-3 p-8 bg-zinc-800">
                <span className="bg-yellow-600 font-bold bg-clip-text text-transparent">Motivo</span>
                <h2 className="md:text-3xl font-bold">Por que escolher a Kite  
                    <span className="border-b-3 border-b-yellow-600"> Soluções</span>?</h2>
                <p className="md:text-lg text-slate-200">
                    Oferecemos soluções completas de construção civil e acabamentos <br/> 
                    modernos, garantido qualidade,satisfação dos clientes.
                </p>

                <ul className="text-lg">
                    <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Qualidade Garantida</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Cumprimento de Prazos</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Profissionais Qualificados</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Soluções Modernas</span>
                    </li>
                     <li className="flex items-center gap-4">
                        <span className="h-2 w-2 text-xs bg-yellow-600 rounded-full"></span>
                        <span>Atendimento Personalizado</span>
                    </li>
                    
                </ul>
            </div>
        </section>
    )
}