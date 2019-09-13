/*var imges=document.getElementById("imge");

document.addEventListener("mousemove",function(e){

imges.style.left=e.pageX
imges.style.top=e.pageY    


})*/
var imgs=document.getElementsByClassName("img-item");
var itemContainer=document.querySelector(".itemcontainer");
var lightItem=document.querySelector(".lightitem");
var previous=document.getElementById("prev")
var next=document.getElementById("next");
var close=document.getElementById("close");
var imgsArray=[];
var curentIndex=0;
for(var i=0;i<imgs.length;i++){
    imgsArray.push(imgs[i]);
    imgs[i].addEventListener("click",function(e){
        itemContainer.classList.add("show");
        var imgSrc =e.target.src;
        lightItem.style.backgroundImage="url("+imgSrc+")";
        
        curentIndex=imgsArray.indexOf(e.target);

})
}
next.addEventListener("click",function(e){
   nex();

    console.log(curentIndex);
})
function nex(){
    curentIndex++
    if(curentIndex==imgsArray.length){
        curentIndex=0;
    }
lightItem.style.backgroundImage="url("+imgsArray[curentIndex].src+")";
}
previous.addEventListener("click",function(e){
   pre();
    console.log(curentIndex);
})
function pre(){
     curentIndex--
    if(curentIndex<0){
        curentIndex=imgsArray.length-1;
    }
lightItem.style.backgroundImage="url("+imgsArray[curentIndex].src+")";

}
close.addEventListener("click",function(){
clo();
})
function clo(){
                itemContainer.classList.remove("show");

}
document.addEventListener("keydown",function(e){
    if(e.keyCode==27){
                    itemContainer.classList.remove("show");

    }
    else if(e.keyCode==39){
        nex();
    }
    else if(e.keyCode==37){
        pre();
    }
      
})
itemContainer.addEventListener("click",function(e){
    if(itemContainer==e.target){
    clo();}
})

    
