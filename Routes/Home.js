const Exp	              = require("express");
const router               = Exp.Router();
const ws                  = require("../Middleware/ws");
const wsport	          = process.env.wsport || 27016 ;




router.get( "" , ( req , res ) =>{
    ws(wsport , "emoji" );
    res.render("stream" , {title : "Twiiter App _ Dev" , port : wsport , kind : "emoji" })
});


module.exports = router ;




