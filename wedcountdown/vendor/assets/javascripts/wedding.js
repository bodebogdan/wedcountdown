$(document).ready(function(){
	var date1 = new moment('2019-05-25T00:00:00');
	var date2 = new moment();
	var date3 = new moment('2019-05-24');
	var crt = {'hour':moment().hour(), 'minute':moment().minute(), 'second': moment().second()};
	date3.set(crt);
	var years = date1.diff(date2,'years');
	var months = date1.diff(date2,'months') - (years * 12);
	date2.add(years,'years').add(months,'months');
	var days = date1.diff(date2,'days');
	var hours = date1.diff(date3,'hours');
	var mins = date1.diff(date3,'minutes');
	var secs = date1.diff(date3,'seconds');
	
timer_text();
});


var date = new Date('2019-05-25T00:00:00');
var i = 0;
function timer_text(){

//$("#miro_bode_date").text(date-mydate);
setInterval(update_text,1000);


}
function update_text(){
message = CalDate3(1);
	$("#miro_bode_date").html(message);	
message = CalDate3(2);
	$("#andreea_jon_date").html(message);	


}
function calc_date(){
	
	var diff = Math.floor(date1.getTime() - date2.getTime());
	var hours = 1000 * 60*60;
	var day = hours * 24;
	var days = Math.floor(diff/day);
	var month = Math.floor(days/31);
	var message = "Miro and Bode's wedding will be in : ";
	message+= month + " months, ";
	message+=days + (days>1?" days":" day" );
	message+=hours + (hours==1?" hour.":" hours.");
	return message;
}
function CalDate(flag) {
	var date1= new Date((flag ==1?'2019-05-25T00:00:00':'2019-05-18T00:00:00'));
	var date2 = new Date();
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var secs = Math.floor(diff/1000);
    var mins = Math.floor(secs/60);
    var hours = Math.floor(mins/60);
    var days = Math.floor(hours/24);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);
    months=Math.floor(months%12);
    days = Math.floor(days%31);
    hours = Math.floor(hours%24);
    mins = Math.floor(mins%60);
    secs = Math.floor(secs%60); 
    var message = (flag ==1?"Miro and Bode's wedding will be in : ":"Andreea and Jon's wedding will be in : "); 
    if(days<=0){
    message += secs + " sec "; 
    message += mins + " min "; 
    message += hours + " hours "; 
    }else{
        
        if(years>0){
            message += years + " years ago";    
        }
        if(months>0 || years>0){
            message += months + " months ";
        }
        message += days + " days "; 
    }
    message += hours + " hours ";
    message += mins + " min "; 
    message += secs + " sec "; 
    return message
}
function CalDate2(flag) {
	var date1 = new moment((flag ==1?'2019-05-25T00:00:00':'2019-05-18T00:00:00'));
	var date2 = new moment();
	var date3 = new moment((flag ==1?'2019-05-24':'2019-05-17'));
	var crt = {'hour':moment().hour(), 'minute':moment().minute(), 'second': moment().second()};
	date3.set(crt);
	var years = date1.diff(date2,'years');
	var months = date1.diff(date2,'months') - (years * 12);
	date2.add(years,'years').add(months,'months');
	var days = date1.diff(date2,'days');
	var hours = date1.diff(date3,'hours');
	var mins = date1.diff(date3,'minutes');
	var secs = date1.diff(date3,'seconds');
	
	var message = (flag ==1?"Miro and Bode's wedding will be in : ":"Andreea and Jon's wedding will be in : "); 
    if(days<=0){
    message += secs + " sec "; 
    message += mins + " min "; 
    message += hours + " hours "; 
    }else{
        
        if(years>0){
            message += years + " years ago";    
        }
        if(months>0 || years>0){
            message += months + " months ";
        }
        message += days + " days "; 
    message += hours + " hours ";
    message += mins + " min "; 
    message += secs + " sec ";
    
     
    }
    return message
}
function CalDate3(flag) {
	var date1 = new moment((flag ==1?'2019-05-25T00:00:00':'2019-05-18T00:00:00'));
	var date2 = new moment();
	console.log(date1 < date2);
	var endmessage = '';
	var midMessage = ''
	var date3 = new moment((flag ==1?'2019-05-24':'2019-05-17'));	
	var message = (flag ==1?"Miro and Bode's wedding":"Andreea and Jon's wedding");
	//preciseDiffArray(date2,date1);      
    if(date1>date2){
    	midMessage =  " will be in <br>";
    }
    else if(date1.year() == date2.year() && date1.month() == date2.month() && date1.date() == date2.date())
    	return message += " is today!!!"
    else{
    	midMessage = " was <br> ";
    	endmessage = '<br> ago.';
    }
    message += midMessage + preciseDiff(date2,date1) + endmessage;     
    
    return message
}
	 

    var STRINGS = {
        nodiff: '',
        year: 'year',
        years: 'years',
        month: 'month',
        months: 'months',
        day: 'day',
        days: 'days',
        hour: 'hour',
        hours: 'hours',
        minute: 'minute',
        minutes: 'minutes',
        second: 'second',
        seconds: 'seconds',
        delimiter: ' '
    };
    function preciseDiff(d2) {
        return preciseDiff(this, d2);
    };
    function preciseDiff(d1, d2) {
        var m1 = moment(d1), m2 = moment(d2);
        if (m1.isSame(m2)) {
            return STRINGS.nodiff;
        }
        if (m1.isAfter(m2)) {
            var tmp = m1;
            m1 = m2;
            m2 = tmp;
        }

        var yDiff = m2.year() - m1.year();
        var mDiff = m2.month() - m1.month();
        var dDiff = m2.date() - m1.date();
        var hourDiff = m2.hour() - m1.hour();
        var minDiff = m2.minute() - m1.minute();
        var secDiff = m2.second() - m1.second();

        if (secDiff < 0) {
            secDiff = 60 + secDiff;
            minDiff--;
        }
        if (minDiff < 0) {
            minDiff = 60 + minDiff;
            hourDiff--;
        }
        if (hourDiff < 0) {
            hourDiff = 24 + hourDiff;
            dDiff--;
        }
        if (dDiff < 0) {
            var daysInLastFullMonth = moment(m2.year() + '-' + (m2.month() + 1), "YYYY-MM").subtract(1, 'M').daysInMonth();
            if (daysInLastFullMonth < m1.date()) { // 31/01 -> 2/03
                dDiff = daysInLastFullMonth + dDiff + (m1.date() - daysInLastFullMonth);
            } else {
                dDiff = daysInLastFullMonth + dDiff;
            }
            mDiff--;
        }
        if (mDiff < 0) {
            mDiff = 12 + mDiff;
            yDiff--;
        }

        function pluralize(num, word) {
            return num + ' ' + STRINGS[word + (num === 1 ? '' : 's')];
        }
        var result = [];

        if (yDiff) {
            result.push(pluralize(yDiff, 'year'));
        }
        if (mDiff) {
            result.push(pluralize(mDiff, 'month'));
        }
        if (dDiff) {
            result.push(pluralize(dDiff, 'day'));
        }
        if (hourDiff) {
            result.push(pluralize(hourDiff, 'hour'));
        }
        if (minDiff) {
            result.push(pluralize(minDiff, 'minute'));
        }
        if (secDiff) {
            result.push(pluralize(secDiff, 'second'));
        }

        return result.join(STRINGS.delimiter);
    };




var last = {
	'months': '0',
	'days': '0',
	'hours': '0',
	'minutes': '0',
	'seconds': '0'
};
function compare_times(t1,t2,f){
	switch(f){
		case 'M': 
			return t1["months"] !== t2["months"];
		case 'd': 
			return t1["days"] !== t2["days"];
		case 'h': 
			return t1["hours"] !== t2["hours"];
		case 'm': 
			return t1["minutes"] !== t2["minutes"];
		case 's': 
			return t1["seconds"] !== t2["seconds"];
		default:
			return false;	
	}
}

var tickState = true;
function preciseDiffArray(d1,d2){
 	var array = preciseDiff(d1,d2).replace(/\s*months\s*/,'M;').replace(/\s*days\s*/,'d;').replace(/\s*hours\s*/,'h;').replace(/\s*minutes\s*/,'m;').replace(/\s*seconds\s*/,'s;').replace(/\s*month\s*/,'M;').replace(/\s*day\s*/,'d;').replace(/\s*hour\s*/,'h;').replace(/\s*minute\s*/,'m;').replace(/\s*second\s*/,'s;').split(';');
 	var month='0',days='0',hours='0',minutes='0',seconds='0';
 	//console.log(array);
 	for(var i= 0; i<array.length;i++){
 		if(array[i].length<2)
 			continue;
 		switch(array[i].slice(-1)){
 			case 'M': 
 				months = array[i].slice(0,-1);
 				break;
 			case 'd': 
 				days = array[i].slice(0,-1);
 				break;
 			case 'h': 
 				hours = array[i].slice(0,-1);
 				break;
 			case 'm': 
 				minutes = array[i].slice(0,-1);
 				break;
			case 's': 
 				seconds = array[i].slice(0,-1);
 				break;
 			default:
 				break;	 			
 		}
 	}

	var dct = {
		'months': months,
		'days': days,
		'hours': hours,
		'minutes': minutes,
		'seconds': seconds
	}
	updateTime(dct);
	//console.log(dct);
 }			
var tickElements = Array.from(document.querySelectorAll('.tick'));
function updateTime(now){
	if(now == last)
		return;
	console.log('Now\n');console.log(now);
	console.log('Last\n');console.log(last);
  	var monthsContainer = document.querySelector('.months');
	var daysContainer = document.querySelector('.days');
	var hoursContainer = document.querySelector('.hours');
	var minutesContainer = document.querySelector('.minutes');
	var secondsContainer = document.querySelector('.seconds');
	var tickElements = Array.from(document.querySelectorAll('.tick'));
  
  if (compare_times(now,last,'M')) {
    updateContainer(monthsContainer, now["months"]);
  }
  if (compare_times(now,last,'d')) {
    updateContainer(daysContainer, now["days"]);
  }
  if (compare_times(now,last,'h')) {
    updateContainer(hoursContainer, now["hours"]);
  }
  
  if (compare_times(now,last,'m')) {
    updateContainer(minutesContainer, now["minutes"]);
  }
    
  if (compare_times(now,last,'s')) {
    updateContainer(secondsContainer, now["seconds"]);
  }
  
  last = now;
}

function tick () {
  tickElements.forEach(t => t.classList.toggle('tick-hidden'));
}

function updateContainer (container, newTime) {
  var time = newTime.split('');
  
  if (time.length === 1) {
    time.unshift('0');
  }
  
  
  var first = container.firstElementChild
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0]);
  }
  
  var last = container.lastElementChild
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1]);
  }
}

function updateNumber (element, number) {
  //element.lastElementChild.textContent = number
  var second = element.lastElementChild.cloneNode(true);
  second.textContent = number;
  
  element.appendChild(second);
  element.classList.add('move');

  setTimeout(function () {
    element.classList.remove('move');
  }, 990);
  setTimeout(function () {
    element.removeChild(element.firstElementChild);
  }, 990);
}
