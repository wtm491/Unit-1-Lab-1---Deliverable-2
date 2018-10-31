//Javascript logic for deliverable 2!



// Initialize variables to get user input
var eventType = prompt("Please enter the event type: ");
var tempFahr = prompt("Please enter the tempature: ");
var result;


// If casual event - run casualEvent function
if(eventType == "casual"){
  casualEvent(tempFahr);  // Push temp variable into function call!! 
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
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear SOMETHING COMFY and A COAT!";
} else if(tempFahr >= 54 && tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear SOMETHING COMFY and A JACKET!";
} else if(tempFahr > 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear SOMETHING COMFY and YOU WILL NOT NEED A JACKET!";
}

return result;
}

// Function for semi-formal event
function semiFormalEvent(tempFahr){
if(tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear A POLO and A COAT!";
} else if(tempFahr >= 54 && tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear A POLO and A JACKET!";
} else if(tempFahr > 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear A POLO and YOU WILL NOT NEED A JACKET!";
}

return result;
}

// Function for formal event
function formalEvent(tempFahr){
if(tempFahr < 54){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear A SUIT and A COAT!";
} else if(tempFahr >= 54 && tempFahr <= 70){
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear A SUIT and A JACKET!";
} else if(tempFahr > 70) {
 result = "Since it is " + tempFahr + " degrees out and the event is " + eventType + ", you should wear A SUIT and YOU WILL NOT NEED A JACKET!";
}

return result;
}

//Push result string to console
//Print result to screen with alert function
console.log(result);
alert(result);
