
 var todayDate = moment().format('dddd, MMM Do YYYY');
 
 $("#currentDay").html(todayDate);

$(document).ready(function () {
    
    

    $(".saveBtn").on("click", function () {

        

        var text = $(this).siblings(".description").val();

        var time = $(this).parent().attr("id");

        
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {

       
        var timeNow = moment().hour();

        

        $(".time-block").each(function () {

            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    
    $("#H8 .description").val(localStorage.getItem("H8"));

    $("#H9 .description").val(localStorage.getItem("H9"));

    $("#H10 .description").val(localStorage.getItem("H10"));

    $("#H11 .description").val(localStorage.getItem("H11"));

    $("#H12 .description").val(localStorage.getItem("H12"));

    $("#H13 .description").val(localStorage.getItem("H13"));

    $("#H14 .description").val(localStorage.getItem("H14"));

    $("#H15 .description").val(localStorage.getItem("H15"));

    $("#H16 .description").val(localStorage.getItem("H16"));

    $("#H17 .description").val(localStorage.getItem("H17"));

    timeTracker();
})