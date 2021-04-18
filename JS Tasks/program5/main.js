
var string = prompt("Enter a string");

var vowel = 0;

var consonent = 0;

for(var count =0; count<string.length; count++){
    if(string.charAt(count).match(/[aeiou]/)){
       vowel++ 
    }
else if((string.charAt(count).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){
    consonent++
}
}

console.log(`vowel:`, vowel)
console.log(`consonent:`, consonent)

alert("vowel:" + vowel)
alert("consonent:"  + consonent)
