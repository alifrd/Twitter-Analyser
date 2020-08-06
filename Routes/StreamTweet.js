const Exp	              = require("express");
const router               = Exp.Router();
const ws                  = require("../Middleware/ws");
const wsport	          = process.env.wsport || 27015 ;
router.get( "/:kind/:query" , ( req , res ) =>{
    ws(wsport , req.params.kind , req.params.query);
    res.render("stream" , {title : "Twiiter App _ Dev" , port : wsport })
});


module.exports = router ;




