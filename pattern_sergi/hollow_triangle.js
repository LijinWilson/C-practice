let s=""
for(i=1;i<=4;i++){
    for(j=1;j<=7;j++){
        if(i==4 ){
            s=s+"*"

        }
        else{
           if(i+j==5 || j==i+3){
            s=s+"*"
           }
           else{
            s=s+" "
           }
        }

    }
    s=s+"\n"
}
console.log(s);

//    *   
//   * *  
//  *   * 
// *******