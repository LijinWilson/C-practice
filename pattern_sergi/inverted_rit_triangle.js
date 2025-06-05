let s=""
for(i=1;i<=4;i++){
    for(j=1;j<=7;j++){
        if(i==j||i==1 ||i+j==8){
            s=s+"*"

        }
        else{
            s=s+" "
        }

    }
    s=s+"\n"
}
console.log(s);
// *******
//  *   * 
//   * *  
//    *   