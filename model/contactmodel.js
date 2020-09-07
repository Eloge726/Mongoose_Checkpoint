const mongoose =require ('mongoose')
const contactschema = new mongoose.Schema({
    Fullname:{type:String},
    Email:{type:String},
    PhoneNumber:{type: Number},
    Birthday:{type:Number}
})

module.exports=mongoose.model('contact',contactschema)