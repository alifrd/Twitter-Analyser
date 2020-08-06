const Ws = (Port,kind,query) =>{
  const Twit                 = require('twit')
  const config               = require("../Config/cnf");
  const Websocket          =  require("ws");
  const Emoji	              = require("../lib/emoji");  	
  const wss = new Websocket.Server({ port : Port });
  const T = new Twit(config);
  const fs	               = require("fs");
  const path	             = require("fs");

  wss.on('connection', (ws) => {
  
  
    if (kind == "find") {
      const stream = T.stream('statuses/filter', { track: query } )
        stream.on('tweet', function (tweet) {
        try {
          ws.send(JSON.stringify(tweet));  
        } catch (error) {
          stream.stop();
          wss.close();
        }
        });
    }

    else if(kind == "loc"){
        const stream = T.stream('statuses/filter', query )
            stream.on('tweet', function (tweet) {
              ws.send(JSON.stringify(tweet));
        });
    }


    else if(kind == "lang"){
        const stream = T.stream('statuses/sample');
        stream.on('tweet', function (tweet) {
            if (tweet.lang == query){
              ws.send(JSON.stringify(tweet));
            }
        });
    }
   
    else if(kind == "emoji"){
      const stream = T.stream('statuses/sample');
      stream.on('tweet', function (tweet) {
      
        
        let twt = tweet.text ;
        
        for (x in Emoji) {           
            if( twt.includes(Emoji[x])){
                  
                    let reg = new RegExp(`${Emoji[x]}`, 'g')
                    let count = (twt.match(reg) || []).length;
                  //  console.log(Emoji[x] +"===>>>"+count);
                    for (let i = 0; i < count; i++) {
                      try {
                        ws.send(Emoji[x]); 
                      } catch (error) {
                        stream.stop();
                        wss.close();
                      }   
                    }
              }
          }  
      
      
        });
    
    }

  })

  
  // wss.on('close', () =>{
  //   wss.close();
  // });
  
  wss.on('error', (error) =>{
        if(error != null) {
         console.log('error: %s', error);
         wss.close();
         Client.splice(findClient(wss.upgradeReq.url));
    }
  });

  
  return wss ;

  
}


module.exports = Ws ;