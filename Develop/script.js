var containerElement = $('.container');
var timeblock, hourElement, eventElement, saveButton;
var today = moment().format('dddd, MMMM Do, YYYY');
var currentHour = moment().hour();

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

$('#currentDay').text(today);


// Show timeblocks for each hour (military time is easier)
// for loop to append divs for each hour
for(var i=9; i<=17; i++) {
    timeblock = $('<div>');
    timeblock.attr('class', 'time-block row');

    hourElement = $('<div>');
    hourElement.attr('class', 'col-2 hour');
    if(i < 12) {
        hourElement.text(i + ":00 AM");
    } else if(i == 12) {
        hourElement.text(i + ":00 PM");
    } else {
        hourElement.text((i-12) + ":00 PM");
    }
    timeblock.append(hourElement);

    eventElement = $('<input>');
    eventElement.attr('class', 'col-9');
    eventElement.text('testing...');
    timeblock.append(eventElement);

    saveButton = $('<button>');
    saveButton.attr('class', 'saveBtn col-1 button'+i);
    saveButton.html('<img src="https://img.icons8.com/windows/32/000000/save--v1.png"/>');
    timeblock.append(saveButton);

    containerElement.append(timeblock);

    if(i<currentHour) {
        eventElement.attr('class', 'past col-9');
    } else if (i == currentHour) {
        eventElement.attr('class', 'present col-9');
    } else {
        eventElement.attr('class', 'future col-9');
    }
}    

function eventHandler (event) {
    var target = event.target;
    console.log(target);
}

containerElement.on('click', '.saveBtn', eventHandler);



// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist