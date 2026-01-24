function getbuttons(n){
    document.getElementById("finalresult").value +=n
}
function clearbuttons(){
    document.getElementById("finalresult").value=''
}
function getcal(){
    let result = document.getElementById("finalresult").value;
    document.getElementById("finalresult").value=eval(result);
}