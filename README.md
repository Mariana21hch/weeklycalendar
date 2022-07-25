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
    2.a. I added the alresdy created css to the text box
3. in script i need to get date and add a <p> tag to display it on the site
    3.a. there is a slot created for todays date (this part can be obmited)
4. in script get time and create a function if time less than or equal to current time then grey out section
5. in script .click on the save text to the time 
6. on script save to local storage
7. should be able to still view after share  (test)