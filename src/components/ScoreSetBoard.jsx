import React, { useState } from 'react';
import { useContext } from 'react';
import { StateContext } from '../App';
import ReactModal from 'react-modal';

const ScoreSetBoard = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const {
        shokha_score, 
        tore_score, 
        nurbo_score
    } = useContext(StateContext)

    const [shokhaScore, setShokhaScore] = shokha_score
    const [toreScore, setToreScore] = tore_score
    const [nurboScore, setNurboScore] = nurbo_score

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const updateScores = () => {
        const shokhaScore = document.getElementById('shokha-score').value
        const toreScore = document.getElementById('tore-score').value
        const nurboScore = document.getElementById('nurbo-score').value

        setShokhaScore(shokhaScore)
        setToreScore(toreScore)
        setNurboScore(nurboScore)
        localStorage.setItem('shokha_score', shokhaScore)
        localStorage.setItem('tore_score', toreScore)
        localStorage.setItem('nurbo_score', nurboScore)

        closeModal()
    }

    const modalStyle = {
        content: {
          width: '300px',
          height: '400px',
          margin: 'auto',
        }
    };

    return (
        <div className="w-full flex justify-center items-center">
        <div className="w-40 h-20 bg-gray-200 rounded-lg p-4 flex justify-center items-center my-5">
            <button 
                onClick={openModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            Change scores
            </button>
        </div>

        <ReactModal
            isOpen = {modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyle}
        >
            <button onClick={closeModal} className="absolute top-2 right-2 text-red-500">
                X
            </button>

            <div>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="shokha-score" className="block text-gray-700 font-bold">
                            Shokha's score
                        </label>
                        <input
                            id="shokha-score"
                            defaultValue={shokhaScore}
                            className="border rounded-md w-full py-2 px-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="tore-score" className="block text-gray-700 font-bold">
                            Tore's score
                        </label>
                        <input
                            id="tore-score"
                            defaultValue={toreScore}
                            className="border rounded-md w-full py-2 px-3"
                        />
                    </div>

                    <div>
                        <label htmlFor="nurbo-score" className="block text-gray-700 font-bold">
                            Nurbo's score
                        </label>
                        <input
                            id="nurbo-score"
                            defaultValue={nurboScore}
                            className="border rounded-md w-full py-2 px-3"
                        />
                    </div>

                    <div>
                        <button 
                            onClick={updateScores}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </ReactModal>
        </div>
    );
};

export default ScoreSetBoard;
