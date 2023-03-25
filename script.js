let map=document.getElementById('map');
let btn=document.getElementById('btn');

function getLocation(){
    if(localStorage.getItem("lat")){
        btn.disabled=true;
    }
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
        btn.disabled=true;
    }else{
        map.innerText="Sorry to say Geolocation is not supported by your browser";
    }
}

function showPosition(position){
    localStorage.setItem("lat",position.coords.latitude);
    localStorage.setItem("long",position.coords.longitude);
   
}

function removeLocation(){
    btn.disabled=false;
    localStorage.removeItem("lat")
    localStorage.removeItem("long")
}