
const { json } = require('express');
const User = require('../model/userModel') ;
module.exports.register = async (req , res) => {
   try { 
    const {username ,email , password} = req.body ;
    const checkUsername = await User.findOne({username}) ;
    const checkEmail = await User.findOne({email}) ;
    
    if(checkUsername) {
        return res.json({msg : "username is exist" , status : false}) ;
    }

    if(checkEmail) {
        return res.json({msg : "Email is exist" , status : false}) ;
    }

    const user = await User.create( {
        username ,
        email ,
        password ,
    }) ;

    return res.json({ status : true, user}) ;

} catch(err) {
    console.log(err) ;
}

}


module.exports.login = async(req ,res) => {
    try { 

        const {username , password} = req.body ;
        const checkUsername = await User.findOne({username}) ;
        const checkPassword = await User.findOne({password}) ;
        
        if(checkUsername ) {
            if(checkPassword) {
                return res.json({msg : "Login Sucessfully" , status : true , user :checkUsername}) ;
            }
        }
    
    
        return res.json({msg : "Email or Password is not correct" ,status : false}) ;
    
    } catch(err) {
        console.log(err) ;
    }
}


module.exports.setAvatar = async(req , res) => {

    
    try{
           const userId = req.params.id ;
           const userImg = req.body.image ;
           const userdata = await User.findByIdAndUpdate(userId , {
           isavatarSet : true ,
            avatar : userImg ,
        }) 
        
        
        return res.json({isSet :userdata.isavatarSet , avatarImg : userdata.avatar}) ;


      } catch(err) {
         console.log(err) ;
      }
}


module.exports.allUsers = async(req , res) => {
   try{
      
      const id = req.params.id ;
      const users = await User.find({_id : {$ne : id}}).select([
        "username" ,
         "email" ,
         "avatar" ,
         "_id" ,

      ])
     
    //   console.log(users) ;
      return res.json(users) ;

   }catch(err) {
    console.log(err) ;
   }
}
