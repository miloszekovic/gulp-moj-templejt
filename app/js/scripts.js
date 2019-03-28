// add class to header
jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
        jQuery("header").addClass("small-header");
    } else {
        jQuery("header").removeClass("small-header");
    }
});

// home slider
jQuery( document ).ready(function( $ ) {
    jQuery( '#home-slider' ).sliderPro({
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailPointer: false,
        autoplay: true,
        autoScaleLayers: false
    });
});

// fliping
jQuery(function(){
    jQuery("#slide-icon-a").flip({
        axis: "y",
        reverse: false,
        trigger: "hover",
        speed: 1000
    });
});

// zoom img
jQuery(document).ready(function($){
     jQuery('#myimage').addpowerzoom({
         defaultpower: 3,
         powerrange: [2,5],
         largeimage: null,
         magnifiersize: [230,130]
    })
})

// google map
function initialize() {
var latlng = new google.maps.LatLng(44.934361,20.151002);
var settings = {
    zoom: 15,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
    navigationControl: true,
    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
    mapTypeId: google.maps.MapTypeId.ROADMAP};
var map = new google.maps.Map(document.getElementById("map-canvas"), settings);
var companyImage = new google.maps.MarkerImage('images/ui/pin.png',
    new google.maps.Size(40,56),
    new google.maps.Point(0,0),
    new google.maps.Point(30,30)
);
var companyShadow = new google.maps.MarkerImage('.png',
    new google.maps.Size(130,50),
    new google.maps.Point(0,0),
    new google.maps.Point(65, 50));
var companyPos = new google.maps.LatLng(44.934361,20.151002);
var companyMarker = new google.maps.Marker({
    position: companyPos,
    map: map,
    icon: companyImage,
    shadow: companyShadow,
    title:"",
    zIndex: 3});
}