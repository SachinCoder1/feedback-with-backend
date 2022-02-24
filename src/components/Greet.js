import React, { useContext } from 'react'
import { FeedbackContext } from '../context/FeedbackProvider'





function Greet() {

    const { feedback, setfeedback } = useContext(FeedbackContext)



    return (
        <div className='flex justify-center items-center flex-col h-[90vh]'>

            <div className='px-10 py-10  mx-auto text-center bg-[#A4C2F4] '>
                <h2 className=' font-semibold text-[20px]'>
                    Hi there, Share your experience by clicking start.
                </h2>

                <button className='px-5 text-white hover:scale-105 duration-150 mt-10 py-1 bg-green-500 rounded-lg' onClick={() => setfeedback("feedback")}>
                    Start
                </button>
            </div>
        </div>
    )
}

export default Greet