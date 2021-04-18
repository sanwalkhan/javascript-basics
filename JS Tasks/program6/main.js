var string = prompt("enter a string")

function countword(string){
    return string.split(" ").length;
}

console.log(countword(string ))

alert(countword(string))