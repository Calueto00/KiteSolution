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
                        <button className="text-white" onClick={()=> setMenuOPen(!menuOpen)}>Menu</button>
                    </div>
                    {menuOpen && (
                        <ul className="flex flex-col gap-2 text-white text-center mt-4">
                            {links.map((link, index) => (
                                <Link key={index} to={link.href}>{link.label}</Link>
                            ))}
                        </ul>
                    )}
                </nav>
            )}
        </header>
    )
}