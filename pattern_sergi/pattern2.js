let s=""


for(i=1;i<=5;i++){
 
    for(j=1;j<=9;j++){
        if(j>=6-i && j<=4+i && k==1){
            s=s+"*"
            k=0
        }
        else{
            s=s+" "
            k=1
        }

    }
    s=s+"\n"

}
console.log(s);


//     *    
//    * *   
//   * * *  
//  * * * * 
// * * * * *

