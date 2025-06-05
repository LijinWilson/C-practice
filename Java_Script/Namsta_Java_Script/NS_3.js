// Java is an synchronous single thread language---single thread means exicute single code at a time
// and syncronous means exicute code in a certain manner


//akshay saini video 2,namsta js

//**> Call stack--excicution contest,
// Call stack maintain the order of exicution of excicution contest 
// also known as program stack,excicution contest stack,control stack,runtime stack,machine stack

var n=2
function square(num){
    var ans=num*num
    return ans
}
var square2=square(n);
var square4=square(4)

console.log(square2);
console.log(square4);

// end of video 2