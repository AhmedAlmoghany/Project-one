var imgs=document.getElementsByClassName("img-item");
var itemContainer=document.querySelector(".item-container");
var item=document.querySelector(".light-item") ;
var previous=document.getElementById("prev");
var next=document.getElementById("next");
var index=0;

for(var i=0;i<imgs.length;i++){                  

imgs[i].addEventListener("click",function(e){
          itemContainer.classList.add("show"); 
        var imgSrc= e.target.src;
        item.style.backgroundImage="url("+imgSrc+")";
                      })}
next.addEventListener("click",function(e){
    
    index++
    imgs[index].
})