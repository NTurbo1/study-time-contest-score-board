import './App.css'
import React, { createContext, useEffect } from 'react'
import NavBar from './components/NavBar'
import ScoreBoard from './components/ScoreBoard'
import StudyTimeUpdateForm from './components/StudyTimeUpdateForm'
import { useState } from 'react'
import { checkLocalStorageItems } from './utils/ItemsCheck'
import ScoreSetBoard from './components/ScoreSetBoard'

export const StateContext = createContext()

const App = () => {

    useEffect(() => {
        checkLocalStorageItems()
    })

    const shokha_study_time = localStorage.getItem('shokha_study_time')
    const tore_study_time = localStorage.getItem('tore_study_time')
    const nurbo_study_time = localStorage.getItem('nurbo_study_time')
    const shokha_score = localStorage.getItem('shokha_score')
    const tore_score = localStorage.getItem('tore_score')
    const nurbo_score = localStorage.getItem('nurbo_score')

    const [shokhaStudyTime, setShokhaStudyTime] = useState(`${Math.floor(shokha_study_time / 60)} hs ${shokha_study_time % 60} mins`)
    const [toreStudyTime, setToreStudyTime] = useState(`${Math.floor(tore_study_time / 60)} hs ${tore_study_time % 60} mins`)   
    const [nurboStudyTime, setNurboStudyTime] = useState(`${Math.floor(nurbo_study_time / 60)} hs ${nurbo_study_time % 60} mins`)
    const [shokhaScore, setShokhaScore] = useState(shokha_score)
    const [toreScore, setToreScore] = useState(tore_score)   
    const [nurboScore, setNurboScore] = useState(nurbo_score)

    return (
        <StateContext.Provider value={{
            shokha_study_time: [shokhaStudyTime, setShokhaStudyTime],
            tore_study_time: [toreStudyTime, setToreStudyTime],
            nurbo_study_time: [nurboStudyTime, setNurboStudyTime],
            shokha_score: [shokhaScore, setShokhaScore],
            tore_score: [toreScore, setToreScore],
            nurbo_score: [nurboScore, setNurboScore]
        }}>
            <NavBar />
            <ScoreSetBoard />
            <ScoreBoard />
            <StudyTimeUpdateForm />
        </StateContext.Provider>
    )
}

export default App

