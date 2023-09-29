import './App.css'
import React, { createContext, useEffect } from 'react'
import NavBar from './components/NavBar'
import ScoreBoard from './components/ScoreBoard'
import StudyTimeUpdateForm from './components/StudyTimeUpdateForm'
import { useState } from 'react'

export const StateContext = createContext()

const App = () => {

    const shokha_study_time = localStorage.getItem('shokha_study_time')
    const tore_study_time = localStorage.getItem('tore_study_time')
    const nurbo_study_time = localStorage.getItem('nurbo_study_time')

    const [shokhaStudyTime, setShokhaStudyTime] = useState(`${Math.floor(shokha_study_time / 60)} hs ${shokha_study_time % 60} mins`)
    const [toreStudyTime, setToreStudyTime] = useState(`${Math.floor(tore_study_time / 60)} hs ${tore_study_time % 60} mins`)   
    const [nurboStudyTime, setNurboStudyTime] = useState(`${Math.floor(nurbo_study_time / 60)} hs ${nurbo_study_time % 60} mins`)
    
    
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

