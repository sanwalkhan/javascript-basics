var year = document.getElementById("year")

var btn = document.querySelector("#btn")

btn.addEventListener("click", checkleapyear )


 function checkleapyear(){
    if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) ){
        alert(  "this is a leap year")
    }
    else{
        alert("this is not a leap year")
    }

}
