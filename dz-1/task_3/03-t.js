const x = parseFloat(prompt("enter first num: "))
const y = parseFloat(prompt("enter second num: "))
if (x>y){
    console.log("number ", x, " is bigger than number ", y);
}else if (x===y){
    console.log("number ", x, " is equal to number ", y);
} else{
    console.log("number ", y, " is bigger than number ", x);
}