import React from 'react';
import { db } from '../services/firebase-config';
import {createContext, ReactNode, useContext, useEffect, useState} from 'react'


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

export const SkillsAndProjectsContext = createContext<SkillsAndProjectsContextData>(
    {} as SkillsAndProjectsContextData
)

