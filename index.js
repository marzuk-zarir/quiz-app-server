const express = require('express')
const setRoutes = require('./routes')
const connectDB = require('./config/db')
const app = express()
const PORT = process.env.PORT || 3000

// Setup dev env
if (app.get('env') !== 'production') {
    require('dotenv').config()
}

// Connect with database
connectDB()

// Set all routes
app.use('/api', setRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
