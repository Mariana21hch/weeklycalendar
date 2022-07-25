//get current date and break it down to dd mmm yyyy
var fullToday = new Date();
var todayMonth = fullToday.getMonth();
var allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var fullStandardDate = fullToday.getDate() + " " + allMonths[todayMonth] + " " + fullToday.getFullYear();
//get current time
var currentTime = fullToday.toTimeString().split(' ')[0];
var para = document.querySelectorAll("p");
var para_array = Array.from(para);

$(document).ready(function() {
    //call the change section color function
    changeTimeColor();
    getTimes();
    // display current date
    $('#currentDay').html(fullStandardDate);


});

//create a function that 
function changeTimeColor(){
    para.forEach(function(elem){
        //console.log(elem.dataset.time);
        if (elem.dataset.time < currentTime){
            //$(".colorChange").addclass("past");
        }
    });
};

function getTimes() {
    $("section").each(function() {
        var sectionAttr = $(this).attr("data-time");
        var blockTime = new Date(fullToday.getFullYear(),(fullToday.getMonth()),fullToday.getDate(), sectionAttr);
        var presentTime = new Date(fullToday.getFullYear(), fullToday.getMonth(), fullToday.getDate(), currentTime.split(":")[0]);

        if (blockTime < presentTime) {
            $(this).find("div:first").addClass("past");
        } else if (blockTime > presentTime) {
            $(this).find("div:first").addClass("future");
        } else {
            $(this).find("div:first").addClass("present");
        }
    });
}