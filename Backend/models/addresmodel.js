const mongoose=require('mongoose');
const Addresmodel=mongoose.model("Address", new mongoose.Schema({
    name:{type:String, required:true},
    mobile:{type:String,required:true},
    pincode:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},
    mobile2:{type:String,required:true},
    email:{type:String,required:true}

}))
module.exports=Addresmodel