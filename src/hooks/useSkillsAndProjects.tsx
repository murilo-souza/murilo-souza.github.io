import React from 'react';
import { db } from '../services/firebase-config';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import {collection} from 'firebase/firestore'

interface Skill {
    title: string,
    alt: string,
}

interface Project {
    title: string,
    alt: string,
    link: string,
}

interface SkillsAndProjectsContextData {
    skills: (skill: Skill[]) => Promise<void>
    projects: (project: Project[]) => Promise<void>
}

interface ProviderProps{
    children: ReactNode
}

export const SkillsAndProjectsContext = createContext<SkillsAndProjectsContextData>(
    {} as SkillsAndProjectsContextData
)

export function SkillsAndProjectsProvider({children}: ProviderProps){
    const skillsCollectionRef = collection(db, "skills")
    const projectsCollectionRef = collection(db, "projects")
    const [skills, setSkills] = useState<Skill[]>([])
    const [projects, setProjects] = useState<Project[]>([])
}