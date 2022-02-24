import { createContext, useState } from 'react'


export const FeedbackContext = createContext(null)

const FeedbackProvider = ({ children }) => {
    const [feedback, setfeedback] = useState("greet")
    const [answer, setanswer] = useState([])

    return (
        <FeedbackContext.Provider value={{
            feedback, setfeedback,
            answer, setanswer
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}


export default FeedbackProvider