import { api } from "../services/api";
import {createContext, ReactNode, useContext, useEffect, useState} from 'react'

interface Skill{
    id: number,
    title: string,
    image: string,
}

interface Project{
    id: number,
    title: string,
    image: string,
}

interface SkillAndProjectContextData{
    skills:Skill[],
    projects: Project[],

}

interface ProviderProps {
    children: ReactNode,
}

export const SkillAndProjectContext = createContext<SkillAndProjectContextData>(
    {} as SkillAndProjectContextData
)

export function SkillAndProjectProvider({children}: ProviderProps){
    const [skills, setSkills] = useState<Skill[]>([])
    const [projects, setProjects] = useState<Project[]>([])

    useEffect(()=>{
        api.get('/skills').then(response => setSkills(response.data.skills))
        api.get('/projects').then(response => setProjects(response.data.projects))
    },[])

    return(
        <SkillAndProjectContext.Provider value={{skills, projects}}>
            {children}
        </SkillAndProjectContext.Provider>
    )
}

export function useSkillsAndProjects(){
    const context = useContext(SkillAndProjectContext)


    return context
}