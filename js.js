function cadastrar(){
    let nome = document.getElementById("nome").value;
    window.localStorage.setItem("user", nome);
}
function init(){

    let usuario = window.localStorage.getItem("user");
    if(usuario == "" || usuario == null || usuario == undefined){
        document.getElementById("cadastro").style.display ="block";
        document.getElementById("userData").style.display ="none";
    }else{
        document.getElementById("cadastro").style.display ="none";
        document.getElementById("userData").style.display ="block";
        userName.innerHTML = usuario;
    }
}