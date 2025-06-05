//      square pattern

//  for(i=1;i<=5;i++){
//     s=""
//         for(j=1;j<=5;j++){
//             s=s+"*"+" "
          
//         }
//         console.log(s);
//  }

//out put
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

//      hollow square

// for(i=0;i<=5;i++){
//     s=""
//     for(j=0;j<=5;j++){
//         if(i==0 || i==5){
//         s=s+"*"}
//         else{
//             if(j==0 || j==5){
//                 s=s+"*"
//             }
//             else{
//                 s=s+" "
//             }
//         }
//     }
//     console.log(s);

// }

// Output

// ******
// *    *
// *    *
// *    *
// *    *
// ******


// for(row=1;row<=5;row++){
//     s=""
//     for(col=1;col<=5;col++){
//         if(row==1 || row==5){
//             s=s+"*"+" "

//         }
//         else{
//             if(col==1 || col==5){
//             s=s+"*"+"    "
//             }
//             else{
//                 s=s+" "
//             }
//         }


//     }
//     console.log(s);

// }

// * * * * * 
// *       *    
// *       *    
// *       *    
// * * * * * 

//     Triangle
//  upright triangle


// let n=5
// for(i=0;i<=5;i++){
//     s=""
//     for(space=0;space<=i;space++){
//         s=s+" "
//     }
//     for(j=0;j<=(n-i);j++){
//         s=s+"*"+" "

//     }
//     console.log(s);

//}
// * * * * * * 
//  * * * * * 
//   * * * * 
//    * * * 
//     * * 
//      * 

//  inverted 

// let a=5
// for(row=0;row<=a;row++){
//     let s=""
//     for(space=a;space>=row;space--)
//     s=s+" "
//     for(col=5;col>=(a-row);col--){
//         s=s+"*"+" "

//     }
//     console.log(s);
// }

//      Left Triangle 

// for(row=1;row<=5;row++){
//     s=""
//     for(col=0;col<row;col++){
//         s=s+"*"
//     }
//     console.log(s);

// }

//      Right Triangle

// let n=5
// let s=""
// for(i=0;i<=n;i++){
//     for(j=0;j<n-i;j++){
//         s=s+" "


//     }
//     for(k=0;k<i;k++){
//         s=s+"*"

//     }
//     s=s+"\n"
    
// }
// console.log(s);

//      Downward Triangle

// let s=""
// for(let row=1;row<=4;row++){
    
//     for(let col=4;col>=row;col--){
//         s=s+"*"
//     }
//     s=s+"\n"

// }
// console.log(s);


//      Hollow Triangle


let s=""

for(row=1;row<=5;row++){
    for(col=0;col<row;col++){
        if(row==5){
            s=s+"*"

        }
        else{
            if(col==0 || col==row-1){
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

//  Output

// *
// **
// * *
// *  *
// *****


