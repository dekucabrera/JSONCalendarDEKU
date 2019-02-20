$(document).ready(function(){
var count = 1;
var calendar  = document.getElementById("calendarTb");
    $.getJSON("/public/javascripts/cal.json", function(result){
        $.each(result, function(i, field){
            var carItem = document.createElement("div");
            carItem.setAttribute('class', "carousel-item");

            var tableElem = document.createElement("table");
            tableElem.setAttribute('class', "container");
            tableElem.setAttribute('border', "2");
            tableElem.setAttribute('id', i);
            var tr = tableElem.insertRow(0);
            var cell = tr.insertCell(-1);

            tr.setAttribute('class', "month");
            cell.innerHTML = i;
            cell.setAttribute('colspan', "7");
            $.each(field, function(i, days){
                 tr = tableElem.insertRow(-1);
                 tr.setAttribute('id', i);
                $.each(days, function(i, mDays){
                      var cell = tr.insertCell(-1);
                      cell.innerHTML = mDays;
                      cell.setAttribute('id', i);
                });
            });
            carItem.appendChild(tableElem);
            calendar.appendChild(carItem);

            $("#JANUARY #Week1 td:nth-child(1), #FEBRUARY #Week1 td:nth-child(1), #MARCH #Week1 td:nth-child(1), #JULY #Week1 td:nth-child(1), #AUGUST #Week1 td:nth-child(1), #DECEMBER #Week1 td:nth-child(1), #JANUARY #Week3 td:nth-child(1), #FEBRUARY #Week3 td:nth-child(1), #MARCH #Week3 td:nth-child(1), #JULY #Week3 td:nth-child(1), #AUGUST #Week3 td:nth-child(1), #DECEMBER #Week3 td:nth-child(1), #JANUARY #Week5 td:nth-child(1), #FEBRUARY #Week5 td:nth-child(1), #MARCH #Week5 td:nth-child(1), #JULY #Week5 td:nth-child(1), #AUGUST #Week5 td:nth-child(1), #DECEMBER #Week5 td:nth-child(1)").css("color", "red");
            $("#JANUARY #Week2 td:nth-child(6n+1), #FEBRUARY #Week2 td:nth-child(6n+1), #MARCH #Week2 td:nth-child(6n+1), #JULY #Week2 td:nth-child(6n+1), #AUGUST #Week2 td:nth-child(6n+1), #DECEMBER #Week2 td:nth-child(6n+1), #JANUARY #Week4 td:nth-child(6n+1), #FEBRUARY #Week4 td:nth-child(6n+1), #MARCH #Week4 td:nth-child(6n+1), #JULY #Week4 td:nth-child(6n+1), #AUGUST #Week4 td:nth-child(6n+1), #DECEMBER #Week4 td:nth-child(6n+1), #JANUARY #Week6 td:nth-child(6n+1), #FEBRUARY #Week6 td:nth-child(6n+1), #MARCH #Week6 td:nth-child(6n+1), #JULY #Week6 td:nth-child(6n+1), #AUGUST #Week6 td:nth-child(6n+1), #DECEMBER #Week6 td:nth-child(6n+1)").css("color", "red");

            $("#APRIL #Week1 td:nth-child(6n+1), #MAY #Week1 td:nth-child(6n+1), #JUNE #Week1 td:nth-child(6n+1), #SEPTEMBER #Week1 td:nth-child(6n+1), #OCTOBER #Week1 td:nth-child(6n+1), #NOVEMBER #Week1 td:nth-child(6n+1), #APRIL #Week3 td:nth-child(6n+1), #MAY #Week3 td:nth-child(6n+1), #JUNE #Week3 td:nth-child(6n+1), #SEPTEMBER #Week3 td:nth-child(6n+1), #OCTOBER #Week3 td:nth-child(6n+1), #NOVEMBER #Week3 td:nth-child(6n+1), #APRIL #Week5 td:nth-child(6n+1), #MAY #Week5 td:nth-child(6n+1), #JUNE #Week5 td:nth-child(6n+1), #SEPTEMBER #Week5 td:nth-child(6n+1), #OCTOBER #Week5 td:nth-child(6n+1), #NOVEMBER #Week5 td:nth-child(6n+1)").css("color", "red");
            $("#APRIL #Week2 td:nth-child(1), #MAY #Week2 td:nth-child(1), #JUNE #Week2 td:nth-child(1), #SEPTEMBER #Week2 td:nth-child(1), #OCTOBER #Week2 td:nth-child(1), #NOVEMBER #Week2 td:nth-child(1), #APRIL #Week4 td:nth-child(1), #MAY #Week4 td:nth-child(1), #JUNE #Week4 td:nth-child(1), #SEPTEMBER #Week4 td:nth-child(1), #OCTOBER #Week4 td:nth-child(1), #NOVEMBER #Week4 td:nth-child(1), #APRIL #Week6 td:nth-child(1), #MAY #Week6 td:nth-child(1), #JUNE #Week6 td:nth-child(1), #SEPTEMBER #Week6 td:nth-child(1), #OCTOBER #Week6 td:nth-child(1), #NOVEMBER #Week6 td:nth-child(1)").css("color", "red");
        });
    });
});
