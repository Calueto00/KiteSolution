import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'
import github from '../assets/icons/github.svg'
import linkedin from '../assets/icons/linkedin.svg'
import tiktok from '../assets/icons/tiktok.svg'
import email from '../assets/icons/email.svg'
import phone from '../assets/icons/phone.svg'

const socialIcons = [
    {
        id: 'facebook',
        href:'https://www.facebook.com/share/r/1CtZJfAbdZ/?mibextid=wwXIfr',
        icon: facebook,
        label: 'Facebook'
    },
    {
        id: 'instagram',
        href:'https://www.instagram.com/central.kitesolucoeslda',
        icon: instagram,
        label: 'Instagram'
    },
    {
        id: 'whatsapp',
        href:'https://wa.me/244933767293',
        icon: whatsapp,
        label: 'WhatsApp'
    },
    {
        id: 'linkedin',
        href:'https://linkedin.com',
        icon: linkedin,
        label: 'LinkedIn'
    },
    {
        id: 'github',
        href:'https://github.com',
        icon: github,
        label: 'GitHub'
    },
    {
        id: 'tiktok',
        href:'https://tiktok.com',
        icon: tiktok,
        label: 'TikTok'
    }
]

export default function FooterSection(){
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="bg-zinc-900 p-6 md:p-8">
           <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 bg-zinc-950 p-6 rounded-lg shadow-md mb-4">
                {/* Social Icons */}
                <div className="flex flex-col items-center md:items-start">
                    <p className="text-sm font-semibold text-zinc-400 mb-2">Siga-nos</p>
                    <ul className="flex gap-4 flex-wrap">
                        {
                            socialIcons?.map(({ id, href, icon, label }) => (
                                <a 
                                    key={id} 
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-6 h-6 hover:opacity-75 transition-opacity"
                                >
                                    <img src={icon} alt={label} />
                                </a>
                            ))
                        }
                    </ul>
                </div>

                {/* Email */}
                <div className="flex flex-col items-center">
                    <p className="text-sm font-semibold text-zinc-400 mb-2">Email</p>
                    <div className="flex items-center gap-2">
                        <img src={email} alt="Email" className="w-5 h-5" />
                        <a 
                            href="mailto:central.kitesolucoeslda@gmail.com" 
                            className="text-sm text-slate-200 hover:text-white transition-colors"
                        >
                            central.kitesolucoeslda@gmail.com
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col items-center md:items-end">
                    <p className="text-sm font-semibold text-zinc-400 mb-2">Telefone</p>
                    <div className="flex items-center gap-2">
                        <img src={phone} alt="Telefone" className="w-5 h-5" />
                        <a 
                            href="tel:+244933767293"
                            className="text-sm text-slate-200 hover:text-white transition-colors"
                        >
                            +244 933 767 293
                        </a>
                    </div>
                </div>
            </div>

            <p className="text-center text-xs text-zinc-400">
                &copy; {currentYear} Kite Soluções. Todos os direitos reservados.
            </p>
           </div>
        </footer>
    )
}