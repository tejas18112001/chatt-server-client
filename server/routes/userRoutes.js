

const router = require("express").Router() ;
const {register , login} = require('../controller/userController.js') ;

router.post("/register" ,register ) ;
router.post("/login" , login) ;

module.exports = router ;