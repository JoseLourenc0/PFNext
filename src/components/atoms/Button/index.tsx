import { ButtonHTMLAttributes, ReactNode } from "react"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode
}

export const Button = ({children , ...props} : Props) => {
    return (
        <button 
            {...props}
            className = 'bg-green-500 h-10 text-white font-bold hover:bg-green-400 disabled:cursor-not-allowed disabled:bg-gray-300'
        >{children}</button>
    )
}
