import { useState } from "react"

export default function FooterSection(){
    const [data, setData] = useState(new Date())
    return (
        <footer className="bg-zinc-900 p-4">
           <div className="max-w-5xl mx-auto space-y-2 text-slate-200">
            <div className="flex items-center justify-between bg-zinc-950 p-2 rounded-lg shadow-md">
                <ul className="flex gap-4">
                    <li>insta</li>
                    <li>facebook</li>
                    <li></li>
                </ul>
                <a href="">email</a>
                <p>
                    <span>Phone</span>
                    <span> +244 987654321</span>
                </p>
            </div>
            <p className="text-center text-sm"> copyright @All rights reserved {data.getFullYear()}</p>
           </div>
        </footer>
    )
}