var alphabet = document.getElementById("alphabets")

var btn = document.querySelector("#btn")




btn.addEventListener("click" , checkcharacter )


function checkcharacter(){
    var letters = /^[A-Za-z]+$/;
    if(alphabet.value.match(letters))
    {
        document.getElementById("result").innerHTML = "Character is an Alphabet"
    }
    else{
        document.getElementById("result").innerHTML = "Character is not an Alphabet"
    }


}
