"use strict";function initMap(){var e={lat:40.801485408197856,lng:-73.96745953467104},o={zoom:15,center:new google.maps.LatLng(e),mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,mapTypeControl:!1,zoomControl:!1,streetViewControl:!1},o=new google.maps.Map(document.getElementById("contact__map"),o);new google.maps.Marker({map:o,position:e})}document.addEventListener("DOMContentLoaded",initMap);