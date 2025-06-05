// let s=""
// let n=4


// for(i=1;i<=n;i++){
//     for(j=0;j<=n-1;j++){
//         if(i==n || j==0 || j==i-1){
//             s=s+"*"

//         }
//         else{
          
//             s=s+" "
                  
//         }

//     }
//     s=s+"\n"

// }
// console.log(s);

// *   
// **  
// * * 
// ****

//or


let s=""

for(i=1;i<=4;i++){

    for(j=1;j<=i;j++){
        if(i==3 && j==2){
            s=s+" "

        }
        else{
            s=s+"*"
        }

    }
    s=s+"\n"


}
console.log(s);