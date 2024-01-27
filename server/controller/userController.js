
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
                return res.json({msg : "Lobin Sucessfully" , status : true}) ;
            }
        }
    
    
        return res.json({msg : "Email or Password is not correct" ,status : false}) ;
    
    } catch(err) {
        console.log(err) ;
    }
}

