// Display real time and date
function primary_function () {
    var value = new Date()
    var date = value.getFullYear() + "-" + ("0"+((value.getMonth())+1)).slice(-2) + "-" + ("0"+((value.getDay())+1)).slice(-2);
    var time_now = ("0"+((value.getHours()))).slice(-2) + ":" + ("0"+((value.getMinutes()))).slice(-2) + ":" + ("0"+((value.getSeconds()))).slice(-2);
    document.getElementById("clock-time").innerHTML = time_now;
    document.getElementById("clock-date").innerHTML = date;
}

setInterval(primary_function, 1000)

// Change mode: Timer
function timer_changer () {
    // Changing colors (hue to -145)
    const primary_color = "rgb(90, 2, 0)";
    const secondary_color = "rgb(212, 136, 152)"
    const header_color = "rgb(80, 2, 0)";
    
    document.getElementById("body").style.backgroundColor = primary_color;
    
    document.getElementById("header").style.backgroundColor = header_color;
    
    var hr_class = document.getElementsByClassName("hr");
    for (var i = 0; i < hr_class.length; i++ ) {
        hr_class[i].style.color = header_color;
    };

    document.getElementById("clock-button").className = "mode-button-timer";
    document.getElementById("timer-button").className = "mode-button-timer";
    document.getElementById("stopwatch-button").className = "mode-button-timer";

}

document.getElementById("timer-button").addEventListener("click", timer_changer);

// Change mode: Clock
function clock_changer () {
    // Changing colors
    const primary_color = "rgb(0, 90, 40)";
    const secondary_color = "rgb(136, 212, 152)";
    const header_color = "rgb(0, 80, 35)";
    
    document.getElementById("body").style.backgroundColor = primary_color;
    
    document.getElementById("header").style.backgroundColor = header_color;
    
    var hr_class = document.getElementsByClassName("hr");
    for (var i = 0; i < hr_class.length; i++ ) {
        hr_class[i].style.color = header_color;
    }

    document.getElementById("clock-button").className = "mode-button";
    document.getElementById("timer-button").className = "mode-button";
    document.getElementById("stopwatch-button").className = "mode-button";
}

document.getElementById("clock-button").addEventListener("click", clock_changer);

// Change mode: Stopwatch
function stopwatch_changer () {
    // Changing colors (hue to +60)
    const primary_color = "rgb(0, 49, 90)";
    const secondary_color = "rgb(136, 195, 212)";
    const header_color = "rgb(0, 43, 80)";
    
    document.getElementById("body").style.backgroundColor = primary_color;
    
    document.getElementById("header").style.backgroundColor = header_color;
    
    var hr_class = document.getElementsByClassName("hr");
    for (var i = 0; i < hr_class.length; i++ ) {
        hr_class[i].style.color = header_color;
    }

    document.getElementById("clock-button").className = "mode-button-stopwatch";
    document.getElementById("timer-button").className = "mode-button-stopwatch";
    document.getElementById("stopwatch-button").className = "mode-button-stopwatch";
}

document.getElementById("stopwatch-button").addEventListener("click", stopwatch_changer);
