// Display real time and date
function primary_function () {
    var value = new Date()
    var date = value.getFullYear() + "-" + ("0"+((value.getMonth())+1)).slice(-2) + "-" + ("0"+((value.getDay())+1)).slice(-2);
    var time_now = ("0"+((value.getHours()))).slice(-2) + ":" + ("0"+((value.getMinutes()))).slice(-2) + ":" + ("0"+((value.getSeconds()))).slice(-2);
    document.getElementById("clock-time").innerHTML = time_now;
    document.getElementById("clock-date").innerHTML = date;
}

setInterval(primary_function, 1000)

// Change mode: Clock
function clock_changer () {
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

// Change mode: Timer
function timer_changer () {
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

// Change mode: Stopwatch
function stopwatch_changer () {
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
