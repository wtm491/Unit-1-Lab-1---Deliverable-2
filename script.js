//Javascript logic for deliverable 2!
// Other implementation was not working upon further testing :(
// Changed conditionals from typical ALL if statements to else-if statements
//Initialize result variable only once at top

// Initialize variables to get user input
var eventType = prompt("Please enter the event type: ");
var tempFahr = prompt("Please enter the tempature: ");
var result;

// casual event conditional logic
if(eventType == "casual" || tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and something comfy!";
} else if(eventType == "casual" || tempFahr >= 54 || tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and something comfy!";
} else {
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear no jacket and something comfy!";
}


//semi-formal event conditional logic
if(eventType == "semi-formal" || tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and a polo!";
} else if(eventType == "semi-formal" || tempFahr >= 54 || tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and a polo!";
} else {
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear no jacket and a polo!";
}


//formal event conditional logic
if(eventType == "formal" || tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and a suit!";
} else if(eventType == "formal" || tempFahr >= 54 || tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and a suit!";
} else (eventType == "formal" || tempFahr > 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear no jacket and a suit!";
}

//Push result string to console
//Print result to screen with alert function
console.log(result);
alert(result);
