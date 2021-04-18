
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12,
lname : "khan",
fname : "rayy"
 };

 Object = function(obj) {
    var osize = 0;
    for (key in obj) {
        if (obj.hasOwnProperty(key))
         osize++;
    }
    return osize;
};

 var size = Object(student);
console.log('Size of the object : '+ size);



