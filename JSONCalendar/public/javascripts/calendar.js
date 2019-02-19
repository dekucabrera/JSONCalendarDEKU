$(document).ready(function(){
var calendar  = document.getElementById("calendarTb");
    $.getJSON("/public/javascripts/cal.json", function(result){
        $.each(result, function(i, field){
            var carItem = document.createElement("div");
            carItem.setAttribute('class', "carousel-item");

            var tableElem = document.createElement("table");
            tableElem.setAttribute('class', "container");
            tableElem.setAttribute('border', "2");
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
                });
            });
            carItem.appendChild(tableElem);
            calendar.appendChild(carItem);
        });
    });
});
