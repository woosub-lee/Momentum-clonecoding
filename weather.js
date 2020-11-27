const COORDS = "coords";
function handleGeoSucces(position){
    console.log(position);
}
function handleGeoError(){
    console.log("Can't access geo location");
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}
function loadCoords(){
    const loadCords = localStorage.getItem(COORDS);
    if(loadCords === null){
        askForCoords();
    }else{
        //getWeather
    }
}
function init(){
    loadCoords();
}
init();