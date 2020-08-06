const Exp	              = require("express");
const router               = Exp.Router();
const Twit                = require('twit')
const config               = require("../Config/cnf");
const T = new Twit(config);

router.get( "/:comment" , ( req , res ) =>{
    T.post('statuses/update', { status: req.params.comment }, function(err, data) {
        res.json( data );
    });

});

router.post( "/" , ( req , res ) =>{
    T.post('statuses/update', { status: req.body.comment }, function(err, data) {
        res.json( data );
    });
});


module.exports = router ;