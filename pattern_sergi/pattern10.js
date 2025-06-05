let s=""
for(i=1;i<=7;i++){
    for(j=1;j<=4;j++){
        if(j==4 || i+j==5 || i==j+3){
            s=s+"*"

        }
        else{
            s=s+" "
        }

    }
    s=s+"\n"
}
console.log(s);

//    *
//   **
//  * *
// *  *
//  * *
//   **
//    *