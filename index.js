const Exp	              = require("express");
const Path	              = require("path");
const Morgan	         = require("morgan");
const Fs                  = require("fs");
const home	             = require("./Routes/Home");
const getTwit	          = require("./Routes/GetTweet");
const postTwit	          = require("./Routes/PostTweet");
const StreamTwit	     = require("./Routes/StreamTweet");
const app	              = Exp();

//pug
app.set('view engine' , 'pug');
app.set('views' , './views');


//log
const accessLogStream = Fs.createWriteStream(Path.join(__dirname , "./Log/Access.log"), { flags: 'a' })
app.use(Morgan("combined", { stream: accessLogStream }))

//static & parser & decode
app.use(Exp.static(Path.join( __dirname , "./Public")))
app.use(Exp.json());
app.use(Exp.urlencoded({ extended : true }));

//router
app.use("/api/Gettweets" , getTwit)
app.use("/api/Posttweets" , postTwit)
app.use("/api/Streamtweets" , StreamTwit)
app.use("/HomePage",home);

//port
app.listen(4000);


