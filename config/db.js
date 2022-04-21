const mongoose = require('mongoose')

module.exports = async function connectDB() {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`
        )
        console.log('Database connection successful')
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}
