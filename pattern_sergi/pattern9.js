let s=""
for(i=1;i<=7;i++){
    k=7-i
    

    for(j=1;j<=7;j++){
        if(j<=8-i){
            s=s+k
            k--
            

        }
        else{
            s=s+" "
        }
    }
    s=s+"\n"

}
console.log(s);

// 6543210
// 543210 
// 43210  
// 3210   
// 210    
// 10     
// 0      
