let s=""

for(i=1;i<=4;i++){
    for(j=0;j<=7;j++){
        if (j>=i && j<=8-i) {
            s=s+"*"
        } else {
            s=s+" "
        }

    }
    s=s+"\n"

}
console.log(s);

// *******
//  ***** 
//   ***  
//    *   