let s=""
let k=0

for(i=1;i<=7;i++){
    i<=4?k++:k--;
    for(j=1;j<=7;j++){
        if(j>=5-k && j<=3+k){
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
//   ***** 
//    ***  
//     *   