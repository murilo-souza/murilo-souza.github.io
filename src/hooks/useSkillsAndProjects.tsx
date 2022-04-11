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

interface SkillContextData{
    skills:Skill[],

}

interface ProjectContextData{
    projects: Project[],
}
