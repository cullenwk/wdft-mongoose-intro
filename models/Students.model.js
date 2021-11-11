// First create our schema 
const mongoose = require ('mongoose')

let StudentsSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    age: {
        type: Number,
        min: 18
    },
    country: {
        type: String,
        enum: ['France', 'UK']
    }
})

// Then create a model with that schema
let StudentModel = mongoose.model('student', StudentsSchema)

// and lastly export that model so that we can use it
module.exports = StudentModel