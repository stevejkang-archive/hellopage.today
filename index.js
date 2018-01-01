setInterval("dpTime()",1000);
function dpTime(){
   var now = new Date();
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();
    dates = now.getDate();
    months = now.getMonth();
    days = now.getDay();

    if (hours > 12){
        hours -= 12;
    ampm = "오후 ";
    }else{
        ampm = "오전 ";
    }
    if (hours < 10){
        hours = "0" + hours;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (seconds < 10){
        seconds = "0" + seconds;
    }
    if (months < 13){
      months += 1;
    }
    if (days == 1){
      days = "월요일";
    }
    if (days == 2){
      days = "화요일";
    }
    if (days == 3){
      days = "수요일";
    }
    if (days == 4){
      days = "목요일";
    }
    if (days == 5){
      days = "금요일";
    }
    if (days == 6){
      days = "토요일";
    }
    if (days == 7){
      days = "일요일";
    }
    document.getElementById("count").innerHTML = months + "월 " + dates + "일 " + days + " " + ampm + hours + ":" + minutes + ":" + seconds;
}
