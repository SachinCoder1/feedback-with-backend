import React, { useContext, useState } from 'react'
import { FeedbackContext } from '../context/FeedbackProvider'
import { feedbackQuestions } from '../data'

import { sendFeedback } from '../api/Api'

function FeedbackCard() {



    const [currentFeedQuestion, setcurrentFeedQuestion] = useState(0)
    const [currentInput, setcurrentInput] = useState()
    const [textInput, settextInput] = useState("")



    // to change to end
    const { setfeedback } = useContext(FeedbackContext)

    // all feedback answers
    const { answer, setanswer } = useContext(FeedbackContext)


    //  Data to send in database
    const [sendValues, setsendValues] = useState({
        feedbacks: answer,
        textfeedback: textInput
    })





    // to get clicked number
    const handleFeedback = (number) => {
        setcurrentInput(number)

    }


    // to get text of feedback
    const handleChange = (e) => {
        settextInput(e.target.value)
        setsendValues({
            feedbacks: answer,
            textfeedback: textInput
        })
    }







    // next button


    const handleNext = async () => {
        if (currentFeedQuestion + 1 < feedbackQuestions.length) {
            setcurrentFeedQuestion(currentFeedQuestion + 1);
            setanswer([...answer, currentInput])
        } else {
            await sendFeedback(sendValues)

            // to reset everything
            setfeedback("end")
            setcurrentFeedQuestion(0)
            setcurrentInput(null)
            setanswer([])

        }
    }


    // previous 


    const handlePrev = () => {
        if (currentFeedQuestion - 1 >= 0) {
            setcurrentFeedQuestion(currentFeedQuestion - 1);
        }
    }





    return (
        <div className='flex justify-center items-center flex-col h-[90vh]'>
            <div className='px-10 py-10  mx-auto text-center bg-[#A4C2F4] rounded-2xl shadow-lg shadow-slate-400 relative'>
                <h2 className='font-semibold text-[20px] mt-[-20px] mb-14'>
                    Costumer Survey
                </h2>

                <div className='absolute top-10 right-5'>
                    <p>
                        {currentFeedQuestion + 1} / {feedbackQuestions.length}
                    </p>
                </div>
                <div>
                    <p>
                        <span className='pr-5'>
                            {currentFeedQuestion + 1}.
                        </span>
                        {
                            feedbackQuestions[currentFeedQuestion].question
                        }
                    </p>

                </div>

                <div className='flex justify-center py-5'>
                    {
                        feedbackQuestions[currentFeedQuestion].numbers === 'text' ? <input className='px-3 py-2 rounded-3xl outline-none border-none' type="text" name="text" id="text" placeholder='enter feedback here' onChange={(e) => handleChange(e)} /> : feedbackQuestions[currentFeedQuestion].numbers.map((number, index) => {
                            return (
                                <button key={index} onClick={() => handleFeedback(number)} className={`bg-green-500 px-2 mx-1 hover:scale-105 duration-100 text-white rounded-full`}>
                                    {number}
                                </button>
                            )
                        })
                    }
                </div>
                {/* Buttons prev && next */}

                <div className='flex justify-between items-center'>
                    <button className='px-5 text-white hover:scale-105 duration-150 mt-10 py-1 bg-[#1B1BFF] rounded-lg' onClick={() => handlePrev()}>
                        Prev
                    </button>
                    <button disabled={currentFeedQuestion - 1 >= 0} className='px-5 text-white hover:scale-105 duration-150 mt-10 py-1 bg-[#FF00FF] rounded-lg' onClick={() => handleNext()}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard