setInterval(() => {
    moment.locale("ko");
    $("#count").text(moment().format('MMMM Do a h:mm:ss'));
}, 1000);
$(document).ready(function($) {
    $.get("https://api.wunderground.com/api/42087dade24aac1a/geolookup/conditions/lang:KR/q/Korea/Seoul.json", function(parsed_json) {
        // location
        var location = parsed_json.location;
        var location_s = ""; //"<p>국가명(country_name):  "+location.country_name+"</p>"
        //location_s+= "<p>도시명(city_name):  "+location.city+"</p>";
        //location_s+= "<p>경도(lat):  "+location.lat+"</p>";
        //location_s+= "<p>위도(lon):  "+location.lon+"</p>";

        $("#locationinfo").append(location_s);
        // 관측지에 대한 정보
        var observ = parsed_json.current_observation;
        var observ_s = "<p style='float: right;margin-top: 40px;margin-right: 30px;font-size: 20px;text-align: right;'>" + observ.display_location.full + "</p>"; //"<p>관측지 주소 전체 : "+observ.display_location.full+"</p>"
        //observ_s += "<p>관측지 주소 국가 : "+observ.display_location.state_name+"</p>";
        //observ_s += "<p>관측지 주소 도시 : "+observ.display_location.city+"</p>";
        //observ_s += "<p>관측지 경도(latitude) : "+observ.display_location.latitude+"</p>";
        //observ_s += "<p>관측지 위도(longitude) : "+observ.display_location.longitude+"</p>";
        //observ_s += "<p>관측지 해발고도(elevation) : "+observ.display_location.elevation+"</p>";

        $("#observinfo").append(observ_s);
        // 날씨정보
        //var weather_s = "<p>"+observ.observation_time+"</p>"; //"<p>업데이트 정보:  "+observ.observation_time+"</p>"
        //weather_s +="<p>"+observ.weather+", </p>"; //"<p>현재 날씨 :  "+observ.weather+"</p>"
        //weather_s +="<p>현재 온도 화씨(섭씨):  "+observ.temperature_string+"</p>";
        //weather_s +="<p>현재 온도 화씨:  "+observ.temp_f+"</p>";
        //weather_s +="<p>"+observ.temp_c+"°C</p>";
        var weather_s = "<p style='float: right;margin-top: 40px;margin-right: 10px;font-size: 20px;text-align: right;'>" + observ.weather + "</p>";
        weather_s += "<p style='float: right;margin-top: 40px;margin-right: 10px;font-size: 35px;text-align: right;'>" + observ.temp_c + "°C</p>"
        //weather_s += "<p style='float: right;margin-top: 30px;margin-right: 10px;font-size: 16px;text-align: right;'>"+observ.observation_time+"</p>";
        //weather_s +="<p>상대 습도 :  "+observ.relative_humidity+"</p>";
        //weather_s +="<p>바람 정보 전체 :  "+observ.wind_string+"</p>";
        //weather_s +="<p>풍향 :  "+observ.wind_dir+"</p>";
        //weather_s +="<p>풍속 (mph):  "+observ.wind_mph+"</p>";
        //weather_s +="<p>풍속 (kph):  "+observ.wind_kph+"</p>";
        //weather_s +="<p>자외선 양:  "+observ.UV+"</p>";
        //weather_s +="<p>아이콘 : "+observ.icon+"</p>";
        //weather_s +="<p>아이콘 그림 :  "+"<img src='"+observ.icon_url+"'/></p>";

        $("#weatherinfo").append(weather_s);
    });
});