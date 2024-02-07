

const router = require("express").Router() ;
const {register , login , setAvatar ,allUsers } = require('../controller/userController.js') ;

router.post("/register" ,register ) ;
router.post("/login" , login) ;
router.post('/setavatar/:id' , setAvatar) ;
router.get('/allusers/:id' , allUsers) ;
module.exports = router ;