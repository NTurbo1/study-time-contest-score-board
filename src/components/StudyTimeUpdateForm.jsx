import React, { useContext, useState } from 'react';
import { StateContext } from '../App';
import { updateLocalStorageScores } from '../utils/LocalStorageScores';
import { setAllReportsFalse, setAllStudyTimesEmpty } from '../utils/StudyTime';

const StudyTimeUpdateForm = () => {

    const { 
        shokha_study_time, 
        tore_study_time, 
        nurbo_study_time,
        shokha_score, 
        tore_score, 
        nurbo_score
    } = useContext(StateContext)

    const [shokhaStudyTime, setShokhaStudyTime] = shokha_study_time
    const [toreStudyTime, setToreStudyTime] = tore_study_time
    const [nurboStudyTime, setNurboStudyTime] = nurbo_study_time
    const [shokhaScore, setShokhaScore] = shokha_score
    const [toreScore, setToreScore] = tore_score
    const [nurboScore, setNurboScore] = nurbo_score

    const updateScores = () => {
        setShokhaScore(localStorage.getItem('shokhaScore'))
        setToreScore(localStorage.getItem('toreScore'))
        setNurboScore(localStorage.getItem('nurboScore'))
    }

    const updateStudyTime = (event) => {

        event.preventDefault()

        console.log(localStorage);

        const hoursInput = document.getElementById('hours')
        const minutesInput = document.getElementById('minutes')
        const contesterInput = document.getElementById('contester')

        const hours = parseInt(hoursInput.value)
        const minutes = parseInt(minutesInput.value)
        const contester = contesterInput.value

        localStorage.setItem(contester, hours * 60 + minutes)

        if (contester === 'shokha_study_time') {

            if (localStorage.getItem('toreReported') && localStorage.getItem('nurboReported')) {
                updateLocalStorageScores()
                updateScores()
                setShokhaStudyTime('')
                setToreStudyTime('')
                setNurboStudyTime('')
                setAllReportsFalse()
                setAllStudyTimesEmpty()
            } else {
                setShokhaStudyTime(`${hours} hs ${minutes} mins`)
                localStorage.setItem('shokhaReported', true)
            }

        } else if (contester === 'tore_study_time') {

            if (localStorage.getItem('shokhaReported') && localStorage.getItem('nurboReported')) {
                updateLocalStorageScores()
                updateScores()
                setShokhaStudyTime('')
                setToreStudyTime('')
                setNurboStudyTime('')
                setAllReportsFalse()
            } else {
                setToreStudyTime(`${hours} hs ${minutes} mins`)
                localStorage.setItem('toreReported', true)
            }

        } else {
            if (localStorage.getItem('toreReported') && localStorage.getItem('shokhaReported')) {
                updateLocalStorageScores()
                updateScores()
                setShokhaStudyTime('')
                setToreStudyTime('')
                setNurboStudyTime('')
                setAllReportsFalse()
            } else {
                setNurboStudyTime(`${hours} hs ${minutes} mins`)
                localStorage.setItem('nurboReported', true)
            }
        }

        hoursInput.value = ""
        minutesInput.value = ""
        contesterInput.value = ""
    }


    return (
        <div className="pt-10 flex justify-center items-center">
            <form className="w-64 bg-white p-4 shadow-md rounded-lg">
                <div className="mb-4">
                    <label htmlFor="hours" className="block text-gray-700 font-bold mb-2">
                        Hours
                    </label>
                    <input
                        id="hours"
                        className="w-20 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="minutes" className="block text-gray-700 font-bold mb-2">
                        Minutes
                    </label>
                    <input
                        id="minutes"
                        className="w-20 px-2 py-1 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                        type="text"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="contester" className="block text-gray-600 font-semibold">Contesters</label>
                    <select id="contester"
                            className="w-full border rounded py-2 px-3 text-gray-700 focus:outline-none focus:border-blue-400"
                    >
                        <option value={""} disabled selected>Who are you?</option>
                        <option value={"shokha_study_time"}>Shokha</option>
                        <option value={"tore_study_time"}>Tore</option>
                        <option value={"nurbo_study_time"}>Nurbo</option>
                    </select>
                </div>

                <div>
                    <button
                        onClick={updateStudyTime}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-500"
                        type="submit"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StudyTimeUpdateForm;