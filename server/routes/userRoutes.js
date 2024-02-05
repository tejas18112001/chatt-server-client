

const router = require("express").Router() ;
const {register , login , setAvatar} = require('../controller/userController.js') ;

router.post("/register" ,register ) ;
router.post("/login" , login) ;
router.post('/setavatar/:id' , setAvatar) ;

module.exports = router ;