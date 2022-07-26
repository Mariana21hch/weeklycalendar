# weeklycalendar

requirements:
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
- in script i need to get date and add a <p> tag to display it on the site

THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
- in HTML create either a table or sections for each time 

THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
-in script get time and create a function if time less than or equal to current time then grey out section

THEN I can enter an event
WHEN I click the save button for that time block
-in HTML center section make it a text box

- in script .click on the save text to the time 

THEN the text for that event is saved in local storage

- on script save to local storage

WHEN I refresh the page
THEN the saved events persist

should be able to still view after share 


List on what I need to do from start to finish 

1. in HTML create either a table or sections for each time  {complete}
    1.a. I created a sectition and added/ edited the CSS
2. in HTML center section make it a text box {complete}
    2.a. I added the alresdy created css to the text box {completed}
3. in script i need to get date and add a <p> tag to display it on the site
    3.a. there is a slot created for todays date (this part can be obmited)
    3.b. create a script to display current date {complete}
4. in script get time and create a function if time less than or equal to current time then grey out section/ the present time is in red and the future is in green {complete}

5. in script .click on the save text to the time 
6. on script save to local storage
7. should be able to still view after share  (test)



resorses:
https://www.linuxscrew.com/javascript-compare-dates#:~:text=Compare%20JavaScript%20Dates%20%28Day%2FMinute%2FHour%2FBefore%2FAfter%29%2C%20With%20Examples%201%20Using,Day%2C%20Month%2C%20Year.%20...%203%20Moment%20JS.%20

https://www.w3schools.com/TAGS/att_global_data.asp

https://www.skillsugar.com/how-to-use-jquery-attr-to-get-set-data-attribute-values#:~:text=To%20set%20and%20get%20data%20on%20an%20HTML,attribute%20like%20this%3A%20%3Cbutton%20id%3D%22button%22%20type%3D%22button%22%20data-color%3D%22blue%22%3EBlue%20button%3C%2Fbutton%3E

https://www.geeksforgeeks.org/how-to-get-seconds-since-epoch-in-javascript/#:~:text=The%20getTime()%20method%20in,number%20of%20seconds%20since%20epoch.

https://www.w3schools.com/jsref/jsref_settime.asp

https://stackoverflow.com/questions/37571763/javascript-split-function-not-working#:~:text=The%20reason%20yours%20isn%27t%20working%20is%20because%20when,highlight%20why%20you%20are%20getting%20that%20error.%20Share