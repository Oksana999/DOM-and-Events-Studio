// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOffButton = null;
let flightStatus = null;
let shuttleBackground = null;
let spaceShuttleHeight = 0;
let landingButton = null;
let abortMission = null;
let up = null;
let down = null;
let right = null;
let left = null;
let buttons = null;

function init(){
    let rocket = document.getElementById("rocket-container");
    shuttleBackground = document.getElementById("shuttleBackground");
    let flightStatusElement = document.getElementById("flightStatus");
    let spaceShuttleHeightElement = document.getElementById("spaceShuttleHeight");

    takeOffButton = document.getElementById("takeoff");
    shuttleBackground = document.getElementById("shuttleBackground");
    takeOffButton.addEventListener("click", function(event){
        confirm("Confirm that the shuttle is ready for takeoff.");
        if(true){
            flightStatus = flightStatusElement.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight = spaceShuttleHeightElement.innerHTML = 10000;
        }
    });

    landingButton = document.getElementById("landing");
    landingButton.addEventListener("click", function(event){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus = flightStatusElement.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor =  "green";
        spaceShuttleHeight = spaceShuttleHeightElement.innerHTML = 0;
        rocket.style.top = "245px";
        rocket.style.right = "130px";
    });
     abortMission = document.getElementById("missionAbort");
     abortMission.addEventListener("click", function(event){
         confirm("confirm that you want to abort the mission.");
         if(true){
             flightStatus = flightStatusElement.innerHTML = "Mission aborted.";
             shuttleBackground.style.backgroundColor =  "green";
             spaceShuttleHeight = spaceShuttleHeightElement.innerHTML = 0;
             rocket.style.top = "245px";
             rocket.style.right = "130px";
         }
     });

    buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++) {
        switch(buttons[i].innerText) {
            case 'Up' :
                buttons[i].addEventListener("click", function() {
                    let new_top = parseInt(window.getComputedStyle(rocket).getPropertyValue('top')) - 10;
                    if (new_top < 0) {
                        new_top = 0;
                    } else {
                        spaceShuttleHeight = parseInt(spaceShuttleHeightElement.innerHTML) + 10000;
                        spaceShuttleHeightElement.innerHTML = spaceShuttleHeight;
                    }

                    rocket.style.top = new_top + "px";
                });
                break;
            case 'Down':
                buttons[i].addEventListener("click", function(){
                    let new_top = parseInt(window.getComputedStyle(rocket).getPropertyValue('top')) + 10;
                    let max_top = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("height")) - 75;
                    console.log(max_top);
                    if (new_top > max_top) {
                        new_top = max_top;
                    }else{
                        spaceShuttleHeight = parseInt(spaceShuttleHeightElement.innerHTML) - 10000;
                        spaceShuttleHeightElement.innerHTML = spaceShuttleHeight;
                    }
                        rocket.style.top = new_top + "px";

                });
                break;
            case 'Right':
                buttons[i].addEventListener("click", function(event){
                 let new_right = parseInt(window.getComputedStyle(rocket).getPropertyValue('right')) - 10;
                 let max_right = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"))-75;
                 console.log(max_right);
                 if(new_right < 0) {
                     new_right = 0;
                 }
                     rocket.style.right = new_right + "px";

            });
                break;
            case 'Left' :
                buttons[i].addEventListener("click", function(event){
                    let new_left = (parseInt(window.getComputedStyle(rocket).getPropertyValue('right')) + 10);
                    let max_right = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue("width"))-75;
                    if(new_left > max_right) {
                        new_left = max_right;
                    }
                        rocket.style.right = new_left + "px";

                });
               break;
            // default:
            //     break;
           // code block
       }
   }




}
window.onload = init;