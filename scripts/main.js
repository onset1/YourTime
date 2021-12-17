// Display real time and date
function primary_function () {
    var value = new Date()
    var date = value.getFullYear() + "-" + ("0"+((value.getMonth())+1)).slice(-2) + "-" + ("0"+((value.getDay())+1)).slice(-2);
    var time_now = ("0"+((value.getHours()))).slice(-2) + ":" + ("0"+((value.getMinutes()))).slice(-2) + ":" + ("0"+((value.getSeconds()))).slice(-2);
    document.getElementById("clock-time").innerHTML = time_now;
    document.getElementById("clock-date").innerHTML = date;
}

setInterval(primary_function, 1000)
