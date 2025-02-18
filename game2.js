let btn=document.querySelectorAll(".button")

let stoneBtn = document.querySelector('.stonebtn');
let paperBtn = document.querySelector('.paperbtn');
let scissorBtn= document.querySelector('.scissorbtn');

let stoneImage = document.getElementById('stone-img');
let paperImage = document.getElementById('paper-img');
let scissorImage=document.getElementById('scissor-img')

let botstone=document.querySelector('#bot-stone');
let botScissor = document.querySelector('#bot-scissor');
let botpaper=document.querySelector('#bot-paper')

let comscore=document.getElementById('comscore');
let pscore=document.getElementById('pscore')


let playerscore=0;
let botscore=0;
let botSelection=0;
let humanArr = [stoneBtn, paperBtn, scissorBtn];
const humanImages = [stoneImage, paperImage, scissorImage];
const botImages=[botstone,botScissor,botpaper];

function winnercheck(botChoice, currChoice){
    if(botChoice === "botstone" && currChoice === "paperbtn"){
        console.log("you won")
        playerscore++
      console.log(`player score:${playerscore}`);
      pscore.innerText=playerscore;
    }
    else if(botChoice=="botstone" && currChoice == "scissorbtn"){
        console.log("you lose")
        botscore++
        console.log(`player score:${botscore}`);
        comscore.innerText=botscore;
    }
    else if(botChoice=="botpaper" && currChoice=="stonebtn"){
        console.log("you lose")
        botscore++
        console.log(`player score:${botscore}`);
        comscore.innerText=botscore;
    }
    else if(botChoice=="botpaper" && currChoice=="scissorbtn"){
        console.log("you won")
        playerscore++
        console.log(`player score:${playerscore}`);
        pscore.innerText=playerscore;
    }
    else if(botChoice=="botscissor" && currChoice=="paperbtn"){
        console.log("you lose")
        botscore++
        console.log(`player score:${botscore}`);
        comscore.innerText=botscore;
    }
    else if(botChoice=="botscissor" && currChoice=="stonebtn"){
        console.log("you won")
        playerscore++
        console.log(`player score:${playerscore}`)
        pscore.innerText=playerscore;
    }
    else{
        console.log("draw")
    }
 }







function randomimg (){
    let ind = Math.floor(Math.random() * botImages.length);
    //console.log(ind);
    const randomElement = botImages[ind]; 
    return randomElement;
}

humanArr.forEach((ele,idx) => {
    ele.addEventListener('click', () => {
        // console.log(ele.classList[0])
        //console.log(stoneImage, humanImages, humanArr);
        humanImages.forEach((img) =>{
            img.classList.add('action-image');
        }) 
        botImages.forEach((img) =>{
            img.classList.add('action-image');
        }) 
        botSelection = randomimg();
        botSelection.classList.remove('action-image');
        currChoice = ele.classList[0];
        botChoice = botSelection.classList[0];
        humanImages[idx].classList.remove('action-image');
        winnercheck(botChoice,currChoice);
    })
})

// stoneBtn.addEventListener('click', () => {
//     let botSelection = randomimg();
//     botSelection.classList.remove('action-image');
//     stoneImage.classList.remove('action-image');
// })
// paperBtn.addEventListener('click', () => {
//     let botSelection = randomimg();
//     botSelection.classList.remove('action-image');
//     paperImage.classList.remove('action-image');
// })
// scissorBtn.addEventListener('click', () => {
//     let botSelection = randomimg();
//     botSelection.classList.remove('action-image');
//     scissorImage.classList.remove('action-image');
// })
