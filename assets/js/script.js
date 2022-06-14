// header date 
var currentTime = moment().format("MMM Do YYYY, h:mm a");
$("#currentDay").replaceWith(currentTime);

// focus the text area 
$("textarea").on("click", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>")
        .val(text);

  textInput.trigger("focus");
});


var checkDates = function() {
    // sets the current hour from moment each time function is loaded
    var currentHour = moment().hour();

    // a loop for each time block
    $(".time-block").each(function () {
        // splits the id attr. into two parts to give a value to check, then starts at the first one
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        // removes classes for automatic checks
        $(this).removeClass("past present future")
        // changes the color based on the value of the timeBlock
        if (timeBlock < currentHour) {
            $(this).addClass("past");
        }
        else if (timeBlock === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
};

// click button function
$(".saveBtn").on("click", function() {
    //setting the local storage for each hour
    var am9 = document.getElementById("9").value;
    localStorage.setItem("9am Event", am9);

    var am10 = document.getElementById("10").value;
    localStorage.setItem("10am Event", am10);

    var am11 = document.getElementById("11").value;
    localStorage.setItem("11am Event", am11);

    var pm12 = document.getElementById("12").value;
    localStorage.setItem("12pm Event", pm12);

    var pm1 = document.getElementById("1").value;
    localStorage.setItem("1pm Event", pm1);

    var pm2 = document.getElementById("2").value;
    localStorage.setItem("2pm Event", pm2);

    var pm3 = document.getElementById("3").value;
    localStorage.setItem("3pm Event", pm3);

    var pm4 = document.getElementById("4").value;
    localStorage.setItem("4pm Event", pm4);

    var pm5 = document.getElementById("5").value;
    localStorage.setItem("5pm Event", pm5);
});

// display the local storage 
$("#9").val(localStorage.getItem("9am Event"));
$("#10").val(localStorage.getItem("10am Event"));
$("#11").val(localStorage.getItem("11am Event"));
$("#12").val(localStorage.getItem("12pm Event"));
$("#13").val(localStorage.getItem("1pm Event"));
$("#14").val(localStorage.getItem("2pm Event"));
$("#15").val(localStorage.getItem("3pm Event"));
$("#16").val(localStorage.getItem("4pm Event"));
$("#17").val(localStorage.getItem("5pm Event"));

// calls the function to check hour and color correctly
checkDates();


