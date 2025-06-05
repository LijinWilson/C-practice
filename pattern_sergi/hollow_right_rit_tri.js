
let s=""
for(i=1;i<=4;i++){
    for(j=1;j<=4;j++){
        if(i==4||j==4||i+j==5){
            s=s+"*"
        }
        else{
            s=s+" "
        }

    }
    s=s+"\n"
}
console.log(s);

// *
// **
// * *
// ****