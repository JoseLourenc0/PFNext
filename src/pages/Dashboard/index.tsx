import Router from "next/router"
import { Button } from "../../components/atoms/Button"
import { TemplateContainer } from "../../components/templates"
import { Card } from "./components/Card"

export const Dashboard = () => {

    const arr = [
        {id: 0, title: 'Amazon Prime', category: 'Assinatura', cost: 19.99},
        {id: 1, title: 'Spotify', category: 'Assinatura', cost: 29.99},
        {id: 2, title: 'Internet', category: 'Assinatura', cost: 119.99},
        {id: 3, title: 'Parcela Fiat Uno', category: 'Parcela Cartão', cost: 199.99},
        {id: 4, title: 'Parcela PC', category: 'Parcela Cartãoo', cost: 79.99},
        {id: 5, title: 'Assinatura Mercado Livre', category: 'Assinatura', cost: 39.99}
    ]
    
    const handleNavigateToAddNewExpanse = () => {
        Router.push('/dashboard/add')
    }

    return (
    <TemplateContainer>
        <header className = 'w-full max-w-screen-lg flex justify-between items-center h-1/6'>
            <span className = 'font-bold text-2xl'>Expanse Tracker</span>

            <nav className = 'flex gap-4'>
                <Button onClick = {handleNavigateToAddNewExpanse}>Add new Expense</Button>
                <Button variant = 'ghost'>Logout</Button>
            </nav>
        </header>

        <main className = 'bg-green-200 w-full max-w-screen-lg content-start h-5/6 grid overflow-y-scroll grid-cols-3 gap-4 p-4'>
            {arr?.map(item => (
                <Card 
                    key = {item.id} 
                    title = {item.title} 
                    category = {item.category} 
                    cost = {item.cost} 
                />
            ))}
        </main>
    </TemplateContainer>
    )
}