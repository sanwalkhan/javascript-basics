const number = parseInt(prompt('Enter a positive integer: '));



function evensum(number){
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        if(i%2==0){
        sum +=number
    }
    
}
return  sum;
}

console.log('The sum of Even numbers:', evensum(number));
    

