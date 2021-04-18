var str = prompt("Enter a String");

var  alphabets = 0
 var digits = 0;
 var special = 0 ;

for (var count = 0; count<str.length; count++){
    if(str.charAt(count).match(/[abcdefghijklmnopqrstuvwxys && ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)){
        alphabets++
    }

    else if(str.charAt(count).match(/[0123456789]/)){
        digits++
    }
    else{
        special++
    }
}

console.log(alphabets)

console.log(digits)

console.log(special)

alert(`digits:`+ digits)

alert(`alphabets:`+ alphabets)


alert(`special:`+ special)

