//we need to write the logic to connect mongodb

const mongoose = require('mongoose')

//connectdb = custum method

const connectDb = async () => {
    //1 read the environment file variables = mongo_uri
    await mongoose.connect(process.env.MONGO_URI)
    .then(res => {
        console.log('mongodb connected successfully')
    }).catch(err => console.log(err))
}

/*
1 mongoose connect method is promise request method
2 promise constructor has 4 states 
fulfilled - can be handle by .then() method
rejected - can be handled by .catch() method
pending - before fulfilled or rejected
settled - we can't be able to observe the state because it executes after fulfilled or rejected

*/

module.exports = connectDb
//next we need to connect connectdb method to main server