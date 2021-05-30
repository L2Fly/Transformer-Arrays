var transform = document.body.querySelector(".wrapped");

var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];
  
function createteam(thisorthat) {
  var freedom = document.createElement ("div");
  freedom.classList.add("character");
  
  var freedomName = document.createElement ("div");
  var freedomClass = document.createElement ("div");
  var freedomVehicle = document.createElement ("div");
  
  freedomName.innerHTML = "Name: " + thisorthat.name;
  freedomClass.innerHTML = "Class: " + thisorthat.class.toUpperCase();
  freedomVehicle.innerHTML = "Vehicle: " + thisorthat.vehicle;
  
  freedom.appendChild(freedomName);
  freedom.appendChild(freedomClass);
  freedom.appendChild(freedomVehicle);
  
  if (thisorthat.afl == "autobot") {
    freedom.classList.add("autobot");
    freedom.classList.add("img");
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
    freedom.appendChild(img);
  } else {
    freedom.classList.add("decepticon");
    freedom.classList.add("img");
    var img = document.createElement("img");
    img.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
    freedom.appendChild(img);
  }
  
  if (thisorthat.vehicle == "truck") {
    freedomVehicle.style.color = "blue";
  } else if (thisorthat.vehicle == "tank") {
    freedomVehicle.style.color = "green";
  } else if (thisorthat.vehicle == "car") {
    freedomVehicle.style.color = "gold";
  } else {
    freedomVehicle.style.color = "white";
  }
  
    transform.appendChild(freedom);
}

for (var i = 0; i < chrs.length; i++) {
  createteam(chrs[i]);
}



// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white