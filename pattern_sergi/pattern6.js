let s=""
k=0
for(i=1;i<=7;i++){
    i<=3?k++:k--
    for(j=1;j<=4;j++){
        if(j<=k){
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
// * *  
// * * * 
// * *  
// * 