function insert(num){
    document.form.terminal.value = document.form.terminal.value+num;
}
function equal(){
    let exp = document.form.terminal.value
    if(exp){
        document.form.terminal.value = eval(exp);
    }   
}
function cleanall(){
        document.form.terminal.value = "";
}
function del(){
    let cmd = document.form.terminal.value;
    document.form.terminal.value = cmd.substring(0,cmd.length-1);
}