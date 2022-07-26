
var fullToday = new Date(); //Todays date object
var todayMonth = fullToday.getMonth(); //Current Month
var allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; //All Months array in 3 letter format
var fullStandardDate = fullToday.getDate() + " " + allMonths[todayMonth] + " " + fullToday.getFullYear(); //Standard Date Format for Page title DD MMM YYYY
var currentTime = fullToday.toTimeString().split(' ')[0]; //get current time


$(document).ready(function() {
    //call the change section color function
    getTimes();

    // display current date
    $('#currentDay').html(fullStandardDate);

    //When clicking on a save button, Save to localStorage
    $(".saveBtn").click(function() {
        var inputValue = $(this).closest("section").find("input").val();
        localStorage.setItem($(this).closest("section").attr("data-time"), inputValue);
    });

    //on Page load, load values from Storage into the input fields
    $("section").each(function() {
        var keyName = $(this).attr("data-time");
        var keyValue = localStorage.getItem(keyName);
        $(this).find("input").val(keyValue);
    });
});

//create a function to change the time slots from past/ present and future 
// get the data-time attribute 
// need to find a way to compare real time and the data attribute to change the color and add the class
// create two dates one with real time and one with data-time 
// take away the min by .split to only compare hours
//create if statements for each to add the class for each
// call the function at the doc.ready for it to run once the page starts. 

function getTimes() {
    var presentTime = new Date(fullToday.getFullYear(), fullToday.getMonth(), fullToday.getDate(), currentTime.split(":")[0]); //Create Date object with top of the hour and 0 minutes
    $("section").each(function() { //For each section element
        var sectionAttr = $(this).attr("data-time"); //Grab attribute value of 'data-time' in that section element
        var blockTime = new Date(fullToday.getFullYear(),(fullToday.getMonth()),fullToday.getDate(), sectionAttr); //Create a date object for the current block time

        if (blockTime < presentTime) { //If the block time is before the current top of the hour
            $(this).find("div:first").addClass("past"); //Add the 'past' Class
        } else if (blockTime > presentTime) { //If the block time is after the current top of the hour
            $(this).find("div:first").addClass("future"); //Add the 'future' Class
        } else { //else
            $(this).find("div:first").addClass("present"); //Add the 'present' Class
        }
    });
}


