import { Link } from "react-router"

export default function ServiceSection(){

    const cards = [
        {
            title: 'Construção Civil',
            description: 'Executamos obras residenciais, comerciais e institucionais com qualidade, segurança e eficiência, desde a fundação até a entrega final.'
        },
        {
            title: 'Remodelação e Reabilitação',
            description: 'Transformas e modernizamos imóveis, valorizando os espaços através de soluções funcionais.'
        },
        {
            title: 'Estuque e Gesso',
            description: 'Aplicamos estuque e gesso para criar superfícies lisas, resistentes e prontas para acabamentos de elevada qualidade.'
        },
        {
            title: 'Canalização',
            description: 'Projetamos, instalamos e efetuamos manutenção de sistemas hidráulicos, garantindo segurança.'
        }
    ]

    return(
        <>
            <section className="h-screen bg-slate-200 p-6 md:p-0">
                <div className="max-w-5xl mx-auto h-full flex flex-col items-center space-y-7 justify-center">
                    <div className="text-center">
                        <span className="bg-[#f1ce67] bg-clip-text text-transparent font-bold">Nossos Serviços</span>
                        <h3 className="font-bold md:text-4xl text-3xl">Soluções completas para a sua obra</h3>
                    </div>

                    <div className=" grid md:grid-cols-4 grid-cols-1 w-full gap-4">
                        {
                            cards?.map(card => (
                                <div className="border border-l-3 border-t-4 border-t-[#f1ce67] border-l-[#f1ce67] md:p-2 p-3 rounded-lg
                                  shadow-lg border-slate-200 bg-slate-100 md:space-y-4 space-y-3 "
                                    key={card}>
                                        <h4 className="text-lg font-medium">{card?.title}</h4>
                                        <p>{card?.description}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="mt-6">
                        <Link 
                            
                            to={'/services'}>
                            <button className="bg-black text-white px-6 py-3 rounded-lg hover:scale-110 cursor-pointer">
                                Ver Mais
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}