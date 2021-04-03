

var total = 500;

let courses = [ ];

course1 = parseInt(prompt("Enter Course No:1"))
courses.push(course1)
course2 = parseInt(prompt("Enter Course No:2"))
courses.push(course2)
course3 =parseInt(prompt("Enter Course No:3"))
courses.push(course3)
course4 = parseInt(prompt("Enter Course No:4"))
courses.push(course4)
course5 = parseInt(prompt("Enter Course No:5"))
courses.push(course5)

// alert(typeof(course1))
alert(courses)

var obtained = course1 + course2 + course3 + course4 + course5;

percentage = obtained * 100 / total

alert(percentage)


switch (true){
    case (percentage >= 90 ):
        result = "Grade A+";
        alert(result);
        break;

    case (percentage >= 75):
        result = "Grade A";
        alert(result);
        break;

    case (percentage >= 60):
        result = "Grade B";
        alert(result);
        break;
    
    case (percentage >= 45):
        result = "Grade C";
        alert(result);
        break;

    case( percentage >= 30):
        result = "Grade D";
        alert(result);
        break;

    default:
        alert("Fail")
}

