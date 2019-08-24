var modal = document.getElementById('Window');
var btn=document.getElementById("btnProfil");


btn.onclick=function(){
modal.style.display = "block";

}

window.onclick=function(){
    if(event.target == modal){
        modal.style.display="none";
    }
}