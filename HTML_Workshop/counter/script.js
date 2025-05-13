let count = 0;
function increment(){
    count++;
    document.getElementById("CV").innerHTML=`Counter Value : ${count}`

}
function decrement(){
    count--;
    document.getElementById("CV").innerHTML=`Counter Value : ${count}`


}
function reset(){
    count = 0;
    document.getElementById("CV").innerHTML=`Counter Value : ${count}`


}
