$("document").ready(()=>{

    $("#IP-infos").fadeIn()
    var localization = [40.52006, -82.09737]

    var map = L.map('map').setView(localization, 7);

    var pin = L.icon({
        iconUrl: 'images/icon-location.svg',
    
        iconSize:     [46, 56],
        iconAnchor:   [22, 94],
    });
    
    var marker = L.marker(localization, {icon: pin}).addTo(map);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    $("#send-ip").click(()=>{


        $.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_dkuVefcrHAHKyEE1u6K4yFqQ2oxDJ&ipAddress=${$("#ip").val()}`, (data)=>{
            $("#ip-adress").text(data.ip)
            $("#ip-location").text(data.location.city + ', ' + data.location.country + ' ' + data.location.postalCode)
            $("#ip-timezone").text('UTC'+data.location.timezone)
            $("#ip-isp").text(data.isp)
            localization = [data.location.lat, data.location.lng]
            console.log(localization)
            
            $("#IP-infos").fadeOut(100)
            $("#IP-infos").fadeIn()
            map.removeLayer(marker);
            $("#map").fadeOut(100)
            marker = L.marker(localization, { icon: pin }).addTo(map);
            map.setView(localization, 7);
            $("#map").fadeIn()
        })
    })



})
