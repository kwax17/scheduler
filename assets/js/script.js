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
        // splits the id into two parts to give a value
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        // a check
        console.log( timeBlock, currentHour)
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

// calls the function to check hour and color correctly
checkDates();


