import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function NavBar(){
    const [size, setSize] = useState(window.innerWidth)
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { label: 'Início', href: '/' },
        { label: 'Sobre', href: '/about' },
        { label: 'Serviços', href: '/services' },
        { label: 'Contato', href: '/contact' }
    ]

    useEffect(() => {
        function updateSize() {
            setSize(window.innerWidth)
        }
        
        const handleResize = () => updateSize()
        window.addEventListener('resize', handleResize)
        
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Fechar menu ao clicar em um link
    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <header className="fixed w-full z-30 top-0 left-0 right-0 p-4 border-b border-[#ffbf18]/20 bg-zinc-900/95 backdrop-blur-md shadow-lg">
            <div className="max-w-5xl mx-auto">
                {/* Desktop Menu */}
                {size > 768 && (
                    <nav className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-gradient-to-r from-[#c28e2c] to-[#ffbf18] rounded-lg flex items-center justify-center font-bold text-white group-hover:scale-110 transition-transform">
                                K
                            </div>
                            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#dfb24a] to-[#ffbf18] bg-clip-text text-transparent">
                                Kite Soluções
                            </h1>
                        </Link>

                        <ul className="flex gap-8">
                            {links.map((link) => (
                                <Link 
                                    key={link.href}
                                    to={link.href}
                                    className="relative text-slate-200 hover:text-[#ffbf18] font-medium transition-colors duration-300 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#c28e2c] to-[#ffbf18] group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                )}

                {/* Mobile Menu */}
                {size <= 768 && (
                    <nav>
                        <div className="flex items-center justify-between">
                            <Link to="/" className="flex items-center gap-2 group" onClick={handleLinkClick}>
                                <div className="w-7 h-7 bg-gradient-to-r from-[#c28e2c] to-[#ffbf18] rounded-lg flex items-center justify-center font-bold text-white text-sm">
                                    K
                                </div>
                                <h1 className="text-lg font-bold bg-gradient-to-r from-[#dfb24a] to-[#ffbf18] bg-clip-text text-transparent">
                                    Kite
                                </h1>
                            </Link>

                            <button 
                                className="text-white p-2 hover:bg-[#ffbf18]/10 rounded-lg transition-all duration-200"
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Menu"
                                aria-expanded={menuOpen}
                            >
                                {menuOpen ? (
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="w-6 h-6" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                ) : (
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="w-6 h-6" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu Items */}
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-64' : 'max-h-0'}`}>
                            <ul className="flex flex-col gap-2 text-white mt-4">
                                {links.map((link) => (
                                    <Link 
                                        key={link.href}
                                        to={link.href}
                                        onClick={handleLinkClick}
                                        className="px-4 py-2 rounded-lg hover:bg-[#ffbf18]/20 transition-all duration-300 font-medium border border-transparent hover:border-[#ffbf18]/30"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </ul>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}