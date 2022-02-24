import React, { useContext } from 'react'
import { FeedbackContext } from '../context/FeedbackProvider'
import End from './End'
import FeedbackCard from './FeedbackCard'
import Greet from './Greet'

function Home() {

    const { feedback, setfeedback } = useContext(FeedbackContext)


    return (
        <>
            {feedback === "greet" && <Greet />}
            {feedback === "feedback" && <FeedbackCard />}
            {feedback === "end" && <End />}


        </>
    )
}

export default Home