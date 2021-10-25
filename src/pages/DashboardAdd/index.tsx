import React from "react"
import { Button } from "../../components/atoms/Button"
import { InputText } from '../../components/molecules/InputText'
import { Link } from "../../components/molecules/Link"
import { SideBarLR } from "../../components/organism/SideBarLR"
import { TemplateContainer, TemplateContent, TemplateMainSectionLR } from "../../components/templates"

export const DashboardAdd = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <SideBarLR />
                <TemplateMainSectionLR>
                    <h1 className = 'font-bold text-3xl'>Add new Expense</h1>
                    <form className = 'flex flex-col w-full gap-4 max-w-md'>
                        <InputText
                            label = 'Expense' 
                            type = 'text' 
                        />
                        <InputText
                            label = 'Category' 
                            type = 'text' 
                        />
                        <InputText 
                            label = 'Value' 
                            type = 'number' 
                        />
                        <Button disabled>Add Expense</Button>
                    </form>
                    <Link href = "/dashboard">Dashboard</Link>
                </TemplateMainSectionLR>
            </TemplateContent>
        </TemplateContainer>
    )
}
