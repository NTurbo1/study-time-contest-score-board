import React from 'react';
import { useContext } from 'react';
import { StateContext } from '../App';

const ScoreBoard = () => {

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

    return (
        <div className="w-full flex gap-14 justify-center items-center pt-5 flex-wrap">
            <div className="w-48 py-3.5 bg-orange-950 flex flex-col items-center rounded-lg">
                <span className="text-white text-lg font-semibold mb-2">SCORES:</span>
                <span className="text-white">
                    Shokha: {shokhaScore}
                </span>
                <span className="text-white">
                    Tore: {toreScore}
                </span>
                <span className="text-white">
                    Nurbo: {nurboScore}
                </span>
            </div>

            <div className="w-72 py-3.5 bg-orange-950 flex flex-col items-center rounded-lg">
                <span className="text-white text-lg font-semibold mb-2">Today's Study time:</span>
                <span className="text-white">
                    Shokha: {shokhaStudyTime}
                </span>
                <span className="text-white">
                    Tore: {toreStudyTime}                </span>
                <span className="text-white">
                    Nurbo: {nurboStudyTime}
                </span>
            </div>
        </div>
    );
};

export default ScoreBoard;
