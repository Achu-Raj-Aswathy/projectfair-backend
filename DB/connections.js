// import mongoose 
const mongoose = require('mongoose')

// get connection string from .env file 
const connectionString = process.env.DATABASE;

// connect mongodb
mongoose.connect(connectionString).then((res) => {
    console.log("MongoDB connected successfully!!");
}).catch((err) => {
    console.log(`MongoDB connect failed due to ${err}`);
})