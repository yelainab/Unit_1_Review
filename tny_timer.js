"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: yelaina buford;
   Date:   1/9/20

*/
function showClock(){
   var thisDate = new Date("May 19, 2018");
   //var localDate = thisDate
   //var localTime = 

}

function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
}
   var days = (newYear - currentYear)/(1000*60*60*24);
   var hrs = (daysLeft - Math.floor(daysLeft))*24;
   var mins = (hrsLeft - Math.floor(hrsLeft))*60;
   var secs = (minsLeft - Math.floor(minsLeft))*60