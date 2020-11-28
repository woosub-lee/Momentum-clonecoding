const body = document.querySelector("body");
const IMG_NUMBER = 4;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `./Images/bgImage${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}
function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER)+1;
    return number;
}
function init(){
    const randomNumber = getRandom();
    paintImage(randomNumber);
}
init();