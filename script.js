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


console.log(result);
alert(result);
