// Since we will be making use of 3rd party functions (eg. navigator.geolocation.getCurrentPosition) which are not native javascript functions we will need
// to add this function to the list of native javascript functions to allow javascript identify and execute it each time its called.
// This is done by using the addEventListener() function.
//
//var longitude = '';
//var latitude = '';
document.addEventListener("deviceready", onDeviceReady, false);

//We decide to create a function to handle the 3rd party functions (eg. navigator.geolocation.getCurrentPosition)
// which we earlier added to the native functions of the javascript
function onDeviceReady() {
    document.getElementById("getlocation").addEventListener("click", getMyPosition);

    //navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

// onSuccess Geolocation 
//
function onSuccess(position) {

        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;

        var latLng = new google.maps.LatLng(latitude, longitude);

        var mapDesc = {
            center: latLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        // create the map here
        var map = new google.maps.Map(document.getElementById("map"), mapDesc);
    
        // Add marker to the map
        var marker = new google.maps.Marker({
              position: latLng,
              map: map,
              title: 'My Current Location'
          });
}

// onError Callback receives a PositionError object
//
function onError(error) {
    alert("Location Off: Please turn it on");
}

// function to get position when button is clicked
function getMyPosition(){
navigator.geolocation.getCurrentPosition(onSuccess, onError);
}
