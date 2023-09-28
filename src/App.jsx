import './App.css'
import React, { createContext, useEffect } from 'react'
import NavBar from './components/NavBar'
import ScoreBoard from './components/ScoreBoard'
import StudyTimeUpdateForm from './components/StudyTimeUpdateForm'
import { useState } from 'react'

export const StateContext = createContext()

const App = () => {

    const [shokhaStudyTime, setShokhaStudyTime] = useState('')
    const [toreStudyTime, setToreStudyTime] = useState('')   
    const [nurboStudyTime, setNurboStudyTime] = useState('')
    
    
    useEffect(() => {
        if(localStorage.getItem('shokha_score') === null) {
            localStorage.setItem('shokha_score', 0)
        }
        if(localStorage.getItem('tore_score') === null) {
            localStorage.setItem('tore_score', 0)
        }
        if(localStorage.getItem('nurbo_score') === null) {
            localStorage.setItem('nurbo_score', 0)
        }
    }, [])

    return (
        <StateContext.Provider value={{
            shokha_study_time: [shokhaStudyTime, setShokhaStudyTime],
            tore_study_time: [toreStudyTime, setToreStudyTime],
            nurbo_study_time: [nurboStudyTime, setNurboStudyTime]
        }}>
            <NavBar />
            <ScoreBoard />
            <StudyTimeUpdateForm />
        </StateContext.Provider>
    )
}

export default App

