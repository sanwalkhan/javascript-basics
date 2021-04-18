var height = parseInt(prompt("Enyer height of cylinder"))

var diameter = parseInt(prompt("enter Diameter of cylinder"))

var radius = diameter / 2 ;

volume = Math.PI * radius *radius *height

volume = volume.toFixed(4)

console.log("volume is:" + volume)

alert("volume is:" + volume)
