var alphabet = document.getElementById("alphabets")

var btn = document.querySelector("#btn")




btn.addEventListener("click" , checkcharacter )


function checkcharacter(){
    var lettersa = /^[A-Za-z]+$/;
    var lettersn = /^[0-9]+$/;
    if(alphabet.value.match(lettersa))
    {
        document.getElementById("result").innerHTML = "Character is an Alphabet"
    }
    else if (alphabet.value.match(lettersn)){
        document.getElementById("result").innerHTML = "Character is a number"
    }

    else {
        document.getElementById("result").innerHTML = "Character is special"

    }


}
