/*loading background */
$(document).ready(function(){
        $(".loading-page").fadeOut(1000,function(){
            $(".loading-page").removeClass("d-flex")
        });
        

    $("body,html").css("overflowY","auto");
})
$(window).scroll(function(){

let windowscroll = $(window).scrollTop();

if(windowscroll>800){
    $("#butup").fadeIn(500);
}
    else{
        $("#butup").fadeOut(1000);
    }
})
   
$("#butup").click(function(){
    $("body,html").animate({scrollTop:0} , 1000);
})

$(" #openbar").click(function(){
    $(this).siblings().slideToggle();
})


/*sidebar toggle */

$("#open").click(function(){
    if($(".sidebar").width()== 0){
    $(".sidebar").animate({width:"250px"})
    $(".layer").animate({marginLeft:"250px"})
    $(".sidebar ul").animate({marginLeft:"10px"})
    }
    else {
   $(".sidebar").animate({width:"0px"});
    $(".layer").animate({marginLeft:"0px"})
    $(".sidebar ul").animate({marginLeft:"-100px"})  ;
    }
})

$("a").click(function(){
    let attribute = $(this).attr("href");
    let sectionOffset = $(attribute).offset().top;
    $("body,html").animate({scrollTop:sectionOffset},1000);
})
$(".layer #contact").click(function(){
    let hrefattr = $(this).attr("href");
    let contactOffset = $(attribute).offset().top;
    $("body,html").animate({scrollTop:contactOffset},1000);
})







/*end of sidebar toggle*/

 /* */
$(".click").click(function(){
    $(this).children(".paragraph").slideToggle();
    $(this).siblings().children(".paragraph").slideUp();
})
/* contact section */
document.getElementById("charcount").onkeyup=function(e){
       let charcount  = $("textarea").val().length;
    let count= parseInt($("#counter").text());  
    
    if(charcount>=100 ||count<=0)
    {$("#counter").text("your available character finished ");
    $("#send").attr("disabled",true);}

    else if(e.keyCode==8 && charcount>0){           
        count=100-charcount;
        $("#counter").text(count);
    $("#send").attr("disabled",false); }
    
    
    else if(0<charcount<100){ 
        count=100-charcount;
        $("#counter").text(count);
    $("#send").attr("disabled",false);
    
    } }
$("#close").click(function(){

 $(".sidebar").animate({width:"0px"})
    $(".layer").animate({marginLeft:"0px"})

    $(".sidebar ul").animate({marginLeft:"-100px"})
    
})

$(function() {
  $('.skitter-large').skitter({fullscreen :false});
});