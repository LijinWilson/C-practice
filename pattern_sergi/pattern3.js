let s=""
for(i=0;i<=4;i++){
    for(j=0;j<=4;j++){
       
        if(j<=i ){
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
// ***  
// **** 
// *****