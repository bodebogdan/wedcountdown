$(document).ready(function(){
	
timer_text();
});


var date = new Date('2019-05-25T00:00:00');
var i = 0;
function timer_text(){

//$("#miro_bode_date").text(date-mydate);
setInterval(update_text,1000);


}
function update_text(){
message = CalDate(1);
	$("#miro_bode_date").text(message);	
message = CalDate(2);
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
