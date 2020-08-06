const Exp	              = require("express");
const router               = Exp.Router();
const Twit                = require('twit')
const config               = require("../Config/cnf");
const T = new Twit(config)


router.get( "/:kind/:query/:count" , ( req , res ) =>{
    
    if (req.params.kind == "find") {
        T.get('search/tweets', { q: req.params.query , count: req.params.count } , (err , data ) =>{
            res.json(data)
            console.log(typeof data);
        });    
    }
    else if(req.params.kind == "slug"){
        T.get('users/suggestions/:slug', { slug: req.params.query },  (err, data ) => {
            res.json(data);
        })

    }
        
});


module.exports = router ;