import { nav } from "framer-motion/client"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function NavBar(){

    const [size, setSize] = useState(window.innerWidth)
    const [menuOpen, setMenuOPen] = useState(false)

    const links = [
        {label: 'Ínicio', href: '/'},
        {label: 'Sobre', href: '/about'},
        {label:'Serviços', href:'services'},
        {label: 'Contacto', href:'/contact'}
    ]

    useEffect(()=> {
        function updateSize(){
            setSize(window.innerWidth)
        }
        window.addEventListener('resize',()=>{
            updateSize();
        })
    })
    return (
        <header className="fixed w-full z-30 top- left-0 right-0 p-4 border-b border-white/20 bg-zinc-900/90 backdrop-blur-sm">
            {/** menu tablet and desktop */}
            {size > 768 && (
                <nav className="max-w-5xl mx-auto flex items-center justify-between">
                    <h1 className="text-2xl">KiteSolution</h1>
                     <ul className="flex text-xl gap-4 text-white tex-lg font-bold">
                        {links.map((link, index) => (
                            <Link key={index} to={link.href}>{link.label}</Link>
                        ))}
                    </ul>
                </nav>
               
                
            )}
            {/** menu mobile */}
            {size <= 768 && (
                <nav className="">
                    <div className="flex items-center justify-between">
                        <h1>Kite Solution</h1>
                        <button className="text-white" onClick={()=> setMenuOPen(!menuOpen)}>
                            {
                                menuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="w-7 h-7 hover:text-red-600 delay-150 duration-300 transition-all transform hover:scale-105 cursor-pointer" 
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" 
                                    className="w-7 h-7 text-white hover:text-yellow-600 delay-150 duration-300 transition-all transform hover:scale-105 cursor-pointer" 
                                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                                )
                            }
                        </button>
                    </div>
                    {menuOpen && (
                        <ul className="flex flex-col gap-2 text-white text-center mt-4">
                            {links.map((link, index) => (
                                <Link className="hover:bg-yellow-600 p-2 delay-150 duration-300 rounded-lg 
                                transition-all transform" key={index} to={link.href}>{link.label}</Link>
                            ))}
                        </ul>
                    )}
                </nav>
            )}
        </header>
    )
}