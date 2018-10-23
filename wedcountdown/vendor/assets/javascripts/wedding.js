$(document).ready(function(){
	console.log(moment().format());
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
	$("#miro_bode_date").text(message);	
message = CalDate3(2);
	$("#andreea_jon_date").text(message);	


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
	var date3 = new moment((flag ==1?'2019-05-24':'2019-05-17'));
	
	
	var message = (flag ==1?"Miro and Bode's wedding will be in : ":"Andreea and Jon's wedding will be in : "); 
     
    message += preciseDiff(date2,date1);
    
     
    
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
