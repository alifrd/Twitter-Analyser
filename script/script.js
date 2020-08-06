const wsport = document.getElementsByTagName("hidden")[0].innerHTML;
const kind = document.getElementsByTagName("hidden")[1].innerHTML;
const emoji =  ['😀','😁','😂','🤣','😃','😄','😅','😆','😉','😊',
               ,'😋','😎','😍','😘','😗','😙','😚','🙂','🤗','🤔','😐'
               
               ,'😑','😶','🙄','😏','😣','😥','😮','🤐','😯','😪'
               ,'😫','😴','😌','😛','😜','😝','🤤','😒','😓','😔','😕'
               
               ,'🙃','🤑','😲','☹','🙁','😖','😞','😟','😤','😢'
               ,'😭','😦','😧','😨','😩','😬','😰','😱','😳','😵','😡'
               
               ,'😠','😷','🤒','🤕','🤢','🤧','😇','🤠','💩','💪'
               ,'✌️','👌','👍','👎','👊','🙏','❤️','💔','💙','💚','🖤'];
               
const divs = document.getElementsByTagName("div");

const rander = (emj) =>{
    return emoji.indexOf(emj);
}
// console.log(divs[10])

// for(i=0 ; i<emoji.length ; i++){
//     console.log(emoji[i]+divs[i].innerHTML+i);
// }


var ws = new WebSocket(`ws://localhost:${wsport}`);

ws.onopen = () => {
    console.log("Opend") ;  
    ws.send('connected');
}
ws.onclose = () => console.log("Closed");
 
ws.onmessage = (ms) => { 
    if(kind == "emoji"){   
        
        let index = rander(ms.data);
        if (index > 9)
            index--;

        let num  = parseInt(divs[index].children[0].innerHTML)  ;
        num++;
        divs[index].children[0].innerHTML =  num.toString() ;    
    
    }
}

$(document).ready(function(){
    $('div').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', function(event) {
        $(this.children[0]).animate({fontSize: '18', opacity: '0.6' }, "fast").animate({fontSize: '16' , opacity: '1' }, "fast") ;
    })
})


const highlight = ()=>{
    let temp = divs ;
    console.log(typeof temp);
    temp = [].slice.call(temp).sort((a,b)=>{ return parseInt(a.children[0].innerHTML) - parseInt(b.children[0].innerHTML) })
    for (let index = 0; index < temp.length; index++)
        temp[index].style.color = "black"  

    temp[temp.length-1].style.color = "#ea0808";
    
    temp[temp.length-2].style.color = "#cc1818";
    temp[temp.length-3].style.color = "#cc1818";
    
    temp[temp.length-4].style.color = "#9c1f1f";
    temp[temp.length-5].style.color = "#9c1f1f";
    
    temp[temp.length-6].style.color = "#692121";
    temp[temp.length-7].style.color = "#692121";
    
    temp[temp.length-8].style.color = "#e48217";
    temp[temp.length-9].style.color = "#e48217";
    
    temp[temp.length-10].style.color = "#af6d25";
    temp[temp.length-11].style.color = "#af6d25";
    
    temp[temp.length-12].style.color = "#8a5e2d";
    temp[temp.length-13].style.color = "#8a5e2d";



    temp[0].style.color = "#0281f5";
    temp[1].style.color = "#0281f5";
    
    temp[2].style.color = "#0e7fe6";
    temp[3].style.color = "#0e7fe6";
    
    temp[4].style.color = "#1879d2";
    temp[5].style.color = "#1879d2";
    
    temp[6].style.color = "#2073bf";
    temp[7].style.color = "#2073bf";

    temp[8].style.color = "#276cab";
    temp[9].style.color = "#276cab";

    temp[10].style.color = "#2a5f90";
    temp[11].style.color = "#2a5f90";

    temp[12].style.color = "#2b557b";
    temp[13].style.color = "#2b557b";

    temp[14].style.color = "#294a67";
    temp[15].style.color = "#2b557b";
    

}

setInterval(() => {
    highlight();
}, 5000);

