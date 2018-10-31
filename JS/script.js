//Javascript logic for deliverable 2!
//Function implementation - This was fun to code!


// Initialize variables to get user input
var eventType = prompt("Please enter the event type: ");
var tempFahr = prompt("Please enter the tempature: ");
var result;


// If casual event - run casualEvent function
if(eventType == "casual"){
  casualEvent(tempFahr);
}

// If semi-formal event - run semiFormalEvent function
if(eventType == "semi-formal"){
  semiFormalEvent(tempFahr);
}

// If formal event - run formalEvent function
if(eventType == "formal"){
  formalEvent(tempFahr);
}




// Function for casual event
function casualEvent(tempFahr){
if(tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and SOMETHING COMFY!";
} else if(tempFahr >= 54 && tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and SOMETHING COMFY!";
} else if(tempFahr > 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear NO jacket and SOMETHING COMFY!";
}

return result;
}

// Function for semi-formal event
function semiFormalEvent(tempFahr){
if(tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and a POLO!";
} else if(tempFahr >= 54 && tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and a POLO!";
} else if(tempFahr > 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear NO jacket and a POLO!";
}

return result;
}

// Function for formal event
function formalEvent(tempFahr){
if(tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a coat and a SUIT!";
} else if(tempFahr >= 54 && tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear a jacket and a SUIT!";
} else if(tempFahr > 70) {
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear NO jacket and a SUIT!";
}

return result;
}

//Push result string to console
//Print result to screen with alert function
console.log(result);
alert(result);
