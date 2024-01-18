function display_element(val){
    document.getElementById('display').value=document.getElementById('display').value+val
}
function clear_display(){
    document.getElementById('display').value=''
}
function final_result(){
    var user_input=document.getElementById('display').value
    result=eval(user_input)
    document.getElementById('display').value=result
}