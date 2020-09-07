const mongoose=require ('mongoose')
const contact=require ('./model/contactmodel')
const { create } = require('./model/contactmodel')
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, UseUnifiedTopology: true},(er)=>{
    if (er){
        console.log(er)
    }else
    {
        console.log()("db connected")
    }
}
)
//**** creation */
//let person = new contact ({
  //  Fullname:"mehrez",
    //Email:"hiba@gmail.com",
    //PhoneNumber:777777777,
    //Birthday:1992
//})
//person.save()
//.then(data=>console.log(data))
//.catch(er=>console.log(er))
//contact.create([
//    {Fullname:"chourouk",
//Email:"yessine@gmail.com",
//PhoneNumber:88888888,
//Birthday:1990},
//{
//    Fullname:"yassine",
//    Email:"yassine.07gmail.com",
//    PhoneNumber:77777778,
//    Birthday:1998
//}])
//**search */
contact.find()
.then(data=>console.log(data))
.catch(er=>console.log(er))
//***search by id */
contact.findById({_id: "5f47bbf115d1921fe8c3cf80"})
.then(data=>console.log(data))
.catch(er=>console.log(er))
//**search and update */
contact.findOneAndUpdate({Birthdate:1998}, {$set:{PhoneNumber:57666633}})
.then(data=>console.log(data))
.catch(er=>console.log(er))
//**search and remove */
contact.findByIdAndDelete({_id: "5f47bbf115d1921fe8c3cf80"})
.then(data=>console.log(data))
.catch(er=>console.log(er))