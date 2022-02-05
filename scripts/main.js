// Display real time and date
function primary_function() {
    var value = new Date()
    var date = value.getFullYear() + "-" + ("0"+((value.getMonth())+1)).slice(-2) + "-" + ("0"+((value.getDay())+1)).slice(-2);
    var time_now = ("0"+((value.getHours()))).slice(-2) + ":" + ("0"+((value.getMinutes()))).slice(-2) + ":" + ("0"+((value.getSeconds()))).slice(-2);
    document.getElementById("clock-time").innerHTML = time_now;
    document.getElementById("clock-date").innerHTML = date;
}


setInterval(primary_function, 1000)

// Change mode: Clock
function clock_changer() {
    // Clock content
    document.getElementById("timer-frame").style.display = "none";
    document.getElementById("stopwatch-frame").style.display = "none";
    document.getElementById("clock-frame").style.display = "block";
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

    // Changing colors of language options

    // var hr_class = document.getElementsByClassName("hr");
    // for (var i = 0; i < hr_class.length; i++ ) {
    //     hr_class[i].style.color = header_color;
    // };
    
    // Changing color of language list's top border (little trick)

    document.getElementById("language-list").style.borderTopColor = header_color;

    // Changing color of language options (when hovered)

    document.getElementById("language-pair-en").className = "language-pair";
    document.getElementById("language-pair-eo").className = "language-pair";
    document.getElementById("language-pair-es").className = "language-pair";
    document.getElementById("language-pair-fr").className = "language-pair";

    // Highlighting clock nav option

    document.getElementById("clock-button-selector").style.display = "inline";
    document.getElementById("stopwatch-button-selector").style.display = "none";
    document.getElementById("timer-button-selector").style.display = "none";
}

document.getElementById("clock-button").addEventListener("click", clock_changer);

// Timer
var timer_h = 0;
var timer_m = 0;
var timer_s = 0;
var timer_t = document.getElementById("timer-time-content")

// Display values: useful when adding leading zeroes
var timer_h_show;
var timer_m_show;
var timer_s_show;

function timer_show_up_values() {
    if (timer_h < 10) {
        timer_h_show = timer_h.toString().padStart(2, 0);
    }
    if (timer_m < 10) {
        timer_m_show = timer_m.toString().padStart(2, 0);
    }
    if (timer_s < 10) {
        timer_s_show = timer_s.toString().padStart(2, 0);
    }
    timer_t.innerHTML = timer_h_show + ":" + timer_m_show + ":" + timer_s_show;

}

function timer_h_up() {
    timer_h = timer_h + 1;
    //  Conditional so that the maximum numbers of hours is 99
    if (timer_h > 99) {
        timer_h = 0;
    }
    timer_h_show = timer_h;
    timer_show_up_values();
}

function timer_h_down() {
    timer_h = timer_h - 1;
    // Conditional so that the number of hours doesn't go negative
    if (timer_h < 0) {
        timer_h = 99;
    }
    timer_h_show = timer_h;
    timer_show_up_values();

}

function timer_m_up() {
    timer_m = timer_m + 1;
    //  Conditional so that the maximum numbers of minutes is 59
    if (timer_m > 59) {
        timer_m = 0;
    }
    timer_m_show = timer_m;
    timer_show_up_values();
}

function timer_m_down() {
    timer_m = timer_m - 1;
    // Conditional so that the number of minutes doesn't go negative
    if (timer_m < 0) {
        timer_m = 59;
    }
    timer_m_show = timer_m;
    timer_show_up_values();
}

function timer_s_up() {
    timer_s = timer_s + 1;
    //  Conditional so that the maximum numbers of minutes is 59
    if (timer_s > 59) {
        timer_s = 0;
    }
    timer_s_show = timer_s;
    timer_show_up_values();
}

function timer_s_down() {
    timer_s = timer_s - 1;
    // Conditional so that the number of minutes doesn't go negative
    if (timer_s < 0) {
        timer_s = 59;
    }
    timer_s_show = timer_s;
    timer_show_up_values();
}

// Change mode: Timer
function timer_changer() {
    // Timer content
    document.getElementById("clock-frame").style.display = "none";
    document.getElementById("stopwatch-frame").style.display = "none";
    document.getElementById("timer-frame").style.display = "block";
    // Changing colors (hue to -145)
    const primary_color = "rgb(90, 2, 0)";
    const secondary_color = "rgb(212, 136, 152)"
    const header_color = "rgb(80, 2, 0)";
    const third_color = "rgb(218, 191, 209)";
    
    document.getElementById("body").style.backgroundColor = primary_color;
    
    document.getElementById("header").style.backgroundColor = header_color;
    
    var hr_class = document.getElementsByClassName("hr");
    for (var i = 0; i < hr_class.length; i++ ) {
        hr_class[i].style.color = header_color;
    };

    document.getElementById("clock-button").className = "mode-button-timer";
    document.getElementById("timer-button").className = "mode-button-timer";
    document.getElementById("stopwatch-button").className = "mode-button-timer";

    // Changing color of language list's top border (little trick)

    document.getElementById("language-list").style.borderTopColor = header_color;

    // Changing color of language options (when hovered)

    document.getElementById("language-pair-en").className = "timer-language-pair";
    document.getElementById("language-pair-eo").className = "timer-language-pair";
    document.getElementById("language-pair-es").className = "timer-language-pair";
    document.getElementById("language-pair-fr").className = "timer-language-pair";

    // Highlighting stopwatch nav option

    document.getElementById("timer-button-selector").style.display = "inline";
    document.getElementById("stopwatch-button-selector").style.display = "none";
    document.getElementById("clock-button-selector").style.display = "none";

}

document.getElementById("timer-button").addEventListener("click", timer_changer);

// Stopwatch
var stopwatch_t = document.getElementById("stopwatch-time")
var stopwatch_h = 0;
var stopwatch_m = 0;
var stopwatch_s = 0;
var stopwatch_st = 0;
var stopwatch_state = false;

function stopwatch_decision() {
    // Decides whether the button says "start" or "stop"
    if (stopwatch_state == false) {
        document.getElementById("stopwatch-option-1").innerHTML = "Stop";
        stopwatch_start();
    } else {
        document.getElementById("stopwatch-option-1").innerHTML = "Start";
        stopwatch_stop();
    }
}

function stopwatch_start() {
    stopwatch_state = true;
    stopwatch_work();
}

function stopwatch_work() {
    if (stopwatch_state == true) {
        stopwatch_h = parseInt(stopwatch_h)
        stopwatch_m = parseInt(stopwatch_m)
        stopwatch_s = parseInt(stopwatch_s)
    
        stopwatch_s = stopwatch_s + 1;
    
        if (stopwatch_s == 60) {
            stopwatch_m = stopwatch_m + 1;
            stopwatch_s = 0;
        }
        if (stopwatch_m == 60) {
            stopwatch_h = stopwatch_h + 1;
            stopwatch_m = 0;
            stopwatch_s = 0;
        }
        // Making sure numbers come in two digits
    
        if (stopwatch_s < 10 || stopwatch_s == 0) {
            stopwatch_s = '0' + stopwatch_s;
          }
        if (stopwatch_m < 10 || stopwatch_m == 0) {
            stopwatch_m = '0' + stopwatch_m;
        }
        if (stopwatch_h < 10 || stopwatch_h == 0) {
            stopwatch_h = '0' + stopwatch_h;
        }
        
        // Final result

        stopwatch_t.innerHTML = stopwatch_h + ":" + stopwatch_m + ":" + stopwatch_s;

        setTimeout(stopwatch_work, 1000);

        var start = new Date().getTime();
        setInterval(function() {
            var now = new Date().getTime();
            var elapsed = now-start;
            var timeleft = 10000-elapsed; 
            $("#stopwatch_t").text(timeleft);
        },);
    }
}

function stopwatch_stop() {
    stopwatch_state = false;
}

function stopwatch_reset() {
    stopwatch_t.innerHTML = "00:00:00";
    document.getElementById("stopwatch-option-1").innerHTML = "Start";
    stopwatch_h = 0;
    stopwatch_m = 0;
    stopwatch_s = 0;
    stopwatch_state = false;
}



// Change mode: Stopwatch
function stopwatch_changer() {
    // Stopwatch content
    document.getElementById("clock-frame").style.display = "none";
    document.getElementById("timer-frame").style.display = "none";
    document.getElementById("stopwatch-frame").style.display = "block";
    // Changing colors (hue to +60)
    const primary_color = "rgb(0, 49, 90)";
    const secondary_color = "rgb(136, 195, 212)";
    const header_color = "rgb(0, 43, 80)";
    const stopwatch_third_color = "rgb(191, 218, 211)";
    
    document.getElementById("body").style.backgroundColor = primary_color;
    
    document.getElementById("header").style.backgroundColor = header_color;
    
    var hr_class = document.getElementsByClassName("hr");
    for (var i = 0; i < hr_class.length; i++ ) {
        hr_class[i].style.color = header_color;
    }

    document.getElementById("clock-button").className = "mode-button-stopwatch";
    document.getElementById("timer-button").className = "mode-button-stopwatch";
    document.getElementById("stopwatch-button").className = "mode-button-stopwatch";

    // Changing color of language list's top border (little trick)

    document.getElementById("language-list").style.borderTopColor = header_color;

    // Changing color of language options (when hovered)

    document.getElementById("language-pair-en").className = "stopwatch-language-pair";
    document.getElementById("language-pair-eo").className = "stopwatch-language-pair";
    document.getElementById("language-pair-es").className = "stopwatch-language-pair";
    document.getElementById("language-pair-fr").className = "stopwatch-language-pair";

    // Highlighting stopwatch nav option

    document.getElementById("stopwatch-button-selector").style.display = "inline";
    document.getElementById("clock-button-selector").style.display = "none";
    document.getElementById("timer-button-selector").style.display = "none";
}

document.getElementById("stopwatch-button").addEventListener("click", stopwatch_changer);
