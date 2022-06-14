# Work Day Scheduler Starter Code
This website functions as a work day scheduler, where the user can type in events or any item, which is then saved in local storage.  The text remains on the page, so that the user can reload or log off without it disappearing.  

The date and time at the time reload every time the page is reloaded.  It tells the current time by using Moment(), and then formatting it correctly.  It then replaces the empty space in the html through an attribute. 

Every time an hour finishes, the color of the timeblock in question changes from red (present) to grey(past).  Any timeblock that is more than the current time (i.e. has not happened yet) will be green (future).

The save button saves the text to local storage. 