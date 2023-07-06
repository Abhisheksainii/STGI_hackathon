const mongooose = require('mongoose')
const userSchema = mongooose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
   id:{
    type : String,
    required : true,
    unique : true
   }

})

module.exports = mongooose.model('user',userSchema)