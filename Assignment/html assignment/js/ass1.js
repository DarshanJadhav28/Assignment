var x = document.getElementById('loc');

function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);


    }else {
        x.innerHTML="your Browser does not support Geolocation"
    }
}

function showPosition(position){
    x.innerHTML = "Latitude : "+position.coords.latitude;
    x.innerHTML +=  "<br />" 
     x.innerHTML += "Longitude : "+position.coords.longitude;
} 