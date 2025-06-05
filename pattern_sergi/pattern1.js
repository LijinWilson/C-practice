

let s=""
for(row=0;row<=5;row++){
    for(col=1;col<=9;col++){
        if(col>=6-row && col<=4+row){
            s=s+"*"

        }
        else{
            s=s+" "
        }
       

    }
    s=s+"\n"
}
    console.log(s);


//     *    
//    ***   
//   *****  
//  ******* 
// *********
 