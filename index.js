const mongoose = require('mongoose');

let StudentModel = require('./models/Students.model')


//create
//read
//update
//delete


mongoose.connect('mongodb://localhost:27017/ironhack')
    .then(() =>{
        console.log('Yayyy, my DB got connected!')

        // Deletes everything from the DB
        return StudentModel.deleteMany()
    })
    .then(() => {

        //Creates one items
        return StudentModel.create({name: 'Cullen'})
    })
    .then((data) => {
        // console.log(data)

        //Create many items
        let myData = [
            {name:'Taka', age: 21, country: 'France'},
            {name:'Joanne', age: 22},
            {name:'George', age: 23}
        ]
        //Create many items
        return StudentModel.insertMany(myData)

    })
    .then((data) => {
        console.log(data)

        //Find/Read
        // StudentModel.findById()
        // StudentModel.findOne()

       return StudentModel.find({name: 'Taka'}, {age: 1, _id: 0})
    })
    
    .then((dataFound) => {
        // console.log(dataFound)

        // Update
        // StudentModel.findByIdAndUpdate()
        // StudentModel.updateMany()
        return StudentModel.updateOne({name:'Joanne'}, {country: 'Austria'})
    })

    .then((updatedDoc) => {
        //console.log(updatedDoc)

        //delete
        //StudentModel.findOneAndDelete(id)
        //StudentModel.findByIdAndDelete(6504054959484)
        //StudentModel.deleteOne({name:'George'})
        StudentModel.deleteMany({name:'George'}) // delete all the documents that name George

    })

    .catch((err) => {
        console.log('DB connection error!', err)
    })