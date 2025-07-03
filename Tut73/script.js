
function createCard(title,time,views,months,cname){

    let p=' ';
    if(views >1000){views = views/1000;p='K';}
    if(views>1000){views/=1000;p='M';}
    views= Math.floor(views)

    
    let container = document.querySelector(".container");
    
    let d=`
    <div class="box">
    
    <div class="pic">
    <img src="mqdefault.jpg" alt="naaaa">
    <button>${time}</button>
    </div>
    <div class="text">
    
                <div class="name">
                ${title}
                </div>
                <div class="other">
                ${cname} . ${views} ${ p} views . ${months} months
                </div>
                
                </div>
                
                </div>
                `
        container.insertAdjacentHTML("beforeend",d);
            
}

createCard("tut1 by  harry bhaii", "30:20",32443242,10,"CodeWithHarry");
createCard("tut1 by  harry bhaii", "30:20",32443242,10,"CodeWithHarry");