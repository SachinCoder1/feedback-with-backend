import feedbackSchema from '../schema/FeedbackSchema.js'

export const postFeedback = async (req, res) => {

    try {
        await feedbackSchema.insertMany(req.body)
        console.log('items are added successfylly')
        res.status(200).json("added successfully")

    } catch (error) {
        res.status(401).json(error)
        console.log('there is error in controller', error)
    }
}