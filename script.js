//Javascript logic for deliverable 2! I do realize this could have been achieved far more elegantly with the --
// use of loops and most likely functions, but I tried to overcomplicate it attempting that.
// This gets the job done so I figured I would stick with it this time :)  Excited to improve on this too!!

// Initialize variables to get user input
var eventType = prompt("Please enter the event type: ");
var tempFahr = prompt("Please enter the tempature: ");

// casual event conditional logic
if(eventType == "casual" || tempFahr < 54){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and something comfy!";
}

if(eventType == "casual" || tempFahr >= 54 || tempFahr <= 70){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and something comfy!";
}

if(eventType == "casual" || tempFahr > 70){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear no jacket and something comfy!";
}


//semi-formal event conditional logic
if(eventType == "semi-formal" || tempFahr < 54){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and a polo!";
}

if(eventType == "semi-formal" || tempFahr >= 54 || tempFahr <= 70){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and a polo!";
}

if(eventType == "semi-formal" || tempFahr > 70){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear no jacket and a polo!";
}


//formal event conditional logic
if(eventType == "formal" || tempFahr < 54){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and a suit!";
}

if(eventType == "formal" || tempFahr >= 54 || tempFahr <= 70){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and a suit!";
}

if(eventType == "formal" || tempFahr > 70){
var result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear no jacket and a suit!";
}

// Push result string to console
//Print to screen with alert function
console.log(result);
alert(result);
