import mongoose from 'mongoose'
const URL = `mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`


const connectToMongo = async () => {
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('mongo db connected successfully')
    } catch (error) {
        console.log('there is error while connection to mongo', error)
    }
}

export default connectToMongo  
