var imgs=document.getElementsByClassName("img-item");
var container=document.getElementById("lightbox-container");
var lightItem=document.getElementById("lightbox-item");

for(var i=0;i<imgs.length;i++){
    imgs[i].addEventListener("click",function(e){
        var imgsrc=e.target.src;
        container.classList.add("show");
        lightItem.style.backgroundImage="url("+imgsrc+")";
    })
}
var closeButton=document.getElementById("close");
closeButton.addEventListener("click",function(e){
    container.classList.remove("show");
    
})