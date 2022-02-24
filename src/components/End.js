import React, { useContext, useState } from 'react'
import { FeedbackContext } from '../context/FeedbackProvider'

function End() {
    const { feedback, setfeedback } = useContext(FeedbackContext)
    setTimeout(() => {
        setfeedback("greet")
    }, 5000);


    return (
        <div className='flex justify-center items-center flex-col h-[90vh]'>
            <div className='px-10 py-10  mx-auto text-center bg-[#A4C2F4] '>
                <h2 className=' font-semibold text-[20px] text-green-600'>
                    Thanks for sharing your feedback. Your feedback has been submitted successfully.
                </h2>

                <button className='px-5 text-white hover:scale-105 duration-150 mt-10 py-1 bg-green-500 rounded-lg' onClick={() => setfeedback("greet")}>
                    Start Again
                </button>
            </div>
        </div>
    )
}

export default End