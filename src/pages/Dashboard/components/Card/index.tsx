import tw from 'tailwind-styled-components'
import { Button } from "../../../../components/atoms/Button"

export const Card = ({title, category, cost}) => {
    return (
        <CardContainer>
            <h2 className = 'font-bold text-xl'>{title}</h2>
            <p className = 'font-bold px-4 h-8 items-center justify-center text-green-900 bg-green-200 rounded-full self-start'>{category}</p>
            <p className = 'font-bold'>{cost}</p>
            <footer className = 'w-full flex justify-between'>
                <Button variant = 'ghost'>Edit</Button>
                <Button variant = 'ghost'>Delete</Button>
            </footer>
        </CardContainer>
    )
}

export const CardContainer = tw.article`
    bg-white p-4 shadow-md relative flex justify-between flex-col gap-4
`