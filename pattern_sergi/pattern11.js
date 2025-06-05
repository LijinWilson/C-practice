let s=""
let k=0

for(i=1;i<=9;i++){
   
    i<=5?k++:k--;
    x=1

    for(j=1;j<=5;j++){

        if(j>=6-k){
            s=s+x
            x++

        }
        else{
            s=s+" "
        }

    }
    s=s+"\n"
}
console.log(s);

//     1
//    12
//   123
//  1234
// 12345
//  1234
//   123
//    12
//     1