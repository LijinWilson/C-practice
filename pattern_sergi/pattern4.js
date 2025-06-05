let s=""

for(i=1;i<=4;i++){
    k=1
    for(j=1;j<=7;j++){
        if(j>=5-i && j<=3+i){
            s=s+k
            j<4?k++:k--

        }
        else{
            s=s+" "
        }

    }
    s=s+"\n"

}
console.log(s);

// 1   
// 121  
// 12321 
// 1234321