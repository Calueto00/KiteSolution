import { useState } from "react"
import { Link } from "react-router"

import facebook from '../assets/icons/facebook.svg'
import instagram from '../assets/icons/instagram.svg'
import whatsapp from '../assets/icons/whatsapp.svg'

const icons = [
    {
        href:'#',
        icon: facebook
    },
    {
        href:'https://wa.me/244933767293',
        icon: whatsapp
    },
    {
        href:'#',
        icon: instagram
    }
]

export default function FooterSection(){
    const [data, setData] = useState(new Date())
    return (
        <footer className="bg-zinc-900 md:p-4 p-6">
           <div className="max-w-5xl mx-auto space-y-2 text-slate-200">
            <div className="flex items-center md:justify-between md:flex-row flex-col space-y-2 bg-zinc-950 p-2 rounded-lg shadow-md">
                <ul className="flex gap-4">
                    {
                        icons?.map(items =>(
                            <Link key={items} className="w-4" to={items?.href}>
                                <img src={items?.icon} alt="" />
                            </Link>
                        ))
                    }
                </ul>
                <a href="central.kitesolucoeslda@gmail.com" className="text-sm">
                    central.kitesolucoeslda@gmail.com
                </a>
                <p>
                    <span>Phone</span>
                    <span> +244 933767293</span>
                </p>
            </div>
            <p className="text-center text-sm"> copyright @All rights reserved {data.getFullYear()}</p>
           </div>
        </footer>
    )
}