

var timer=60;
var score=0;
let hitn=0;
function makeBubble(){
    let clutter=" ";
    for(let i=1;i<=120;i++){
        let num=Math.floor(Math.random()*9);
        clutter+= `<div class="bubble">${num}</div>`
    }
    document.querySelector("#panelBottom").innerHTML=clutter;
}
function Dtime(){
    setInterval(()=>{
        if(timer>0){
                    timer--;
                    document.querySelector("#timer").textContent=timer;
                 }
    else{ clearInterval(timer)
        document.querySelector("#timer").textContent="--";
        document.querySelector("#panelBottom").innerHTML=`<H1>GAME OVER!!</H1>`;
    }                
},1000)

}
function newHit(){
    hitn=Math.floor(Math.random()*9);
    document.querySelector("#hitBox").textContent=hitn;
}
function hitScore(){

    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
document.querySelector("#panelBottom").addEventListener("click",function(event){
    var clickedNum=Number(event.target.textContent);
    if(clickedNum===hitn){
        hitScore();
        makeBubble();
        newHit();
    }else if(clickedNum !== hitn){
        makeBubble();
    }
});


//Click the bubbles with the correct numbers given in the "HIT" box. Try to achieve the highest score within 60 seconds!

const startbt=document.getElementById('startbutton');

function startGame() {
    score = 0;
    timer = 60;
    startbt.disabled = true; // Disable the start button
    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#timer").textContent = timer;
    newHit();
    makeBubble();
    Dtime();
}

// Event listener for the start button
document.getElementById('startbutton').addEventListener("click", startGame);

