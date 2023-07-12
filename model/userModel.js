const mongoose = require('mongoose')
//create a db schema ref - new mongoose.schema(schema, collection)
const userSchema = new mongoose.Schema({
    name:{
        type : String, //datatype
        required : true //mandatory field
    },
    email:{
        type : String, //datatype
        required : true, //mandatory field
        unique : true // unique value -  will not allow duplicates
    },
    
    mobile:{
        type : String, //datatype
        required : true, //mandatory field
        unique : true // unique value -  will not allow duplicates
    },
    
    age:{
        type : Number,
        required : true
    },
    address:{
        type : String,
        required : true
    },
    isActive:{
        type : Boolean,
        default : true //defaujlt value
    },
},{
    collection : 'users', //name of the collection
    timestamps : true // log the created and updated times in collection
})

module.exports = mongoose.model("User",userSchema) //model(Export Schema Name, schema ref)