import mongoose from "mongoose";
import bcrypt from "bcryptjs";

let userSchema = mongoose.Schema({

name:{
    type:String,
    require:true
},

email: {
type:String,
required:true,
unique: true,
lowercase:true,

},
password: {
type:String,
required:true,
minlength:8,

},
role: {
type:String,
enum:['user','admin'],
default: 'user'
}

},

{timestamps: true}
)


//==================>---heahing pasawd---======================= >



userSchema.pre('save', async function(next){

if(!this.isModified('password')){

return next()

}
this.password = await bcrypt.hash(this.password , 15)


})

// ============================>--custom Method--=========================>

userSchema.methods.checkpassword = function(simplePassword){
    return bcrypt.compare(simplePassword , this.password)
}








let User = mongoose.model('user', userSchema)

export default User