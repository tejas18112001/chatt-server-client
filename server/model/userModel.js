
const mongoose  = require('mongoose') ;

const userSchema1 = new  mongoose.Schema ({
    username :{
        type : String ,
        required  : true ,
        unique : true ,
        min : 3 ,
        max : 50 ,
    } ,

    email :{
       type : String ,
       required  : true ,
       unique : true ,
       max : 50 ,
    } ,

    password :{
       type : String ,
       required : true ,
       min :8 ,
    } ,
    isavatarSet :{
      type : Boolean ,
      default : false ,
    } ,

    avatar : {
        type : String ,
        default : "" ,
    }
})


module.exports = mongoose.model("User", userSchema1) ;
