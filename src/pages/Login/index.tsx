import React from "react"
import { Button } from "../../components/atoms/Button"
import { InputText } from '../../components/molecules/InputText'
import { Link } from "../../components/molecules/Link"
import { SideBarLR } from "../../components/organism/SideBarLR"
import { TemplateContainer, TemplateContent, TemplateMainSectionLR } from "../../components/templates"

export const Login = () => {
    return (
        <TemplateContainer>
            <TemplateContent>
                <SideBarLR />
                <TemplateMainSectionLR>
                    <h1 className = 'font-bold text-3xl'>Manage your expenses</h1>
                    <form className = 'flex flex-col w-full gap-4 max-w-md'>
                        <InputText
                            label = 'E-mail' 
                            type = 'email' 
                        />
                        <InputText 
                            label = 'Password' 
                            type = 'password' 
                        />
                        <Button disabled>Log In</Button>
                    </form>
                    <Link href = "/register">Create Account</Link>
                </TemplateMainSectionLR>
            </TemplateContent>
        </TemplateContainer>
    )
}
