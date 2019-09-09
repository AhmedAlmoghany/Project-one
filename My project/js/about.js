/*about page */
$(document).ready(function(){
        $(".loading-page").fadeOut(1000,function(){
            $(".loading-page").removeClass("d-flex")
        });
        

    $("body,html").css("overflowY","auto");
})
$(" #openbar").click(function(){
    $(this).siblings().slideToggle();
})

$(document).ready(function(){
    $("#heading, #paragraph").animate({opacity:1},1000);})
$(".layer #contact ").click(function(){
    let hrefattr = $(this).attr("href");
    let contactOffset = $(hrefattr).offset().top;
    $("body,html").animate({scrollTop:contactOffset},1000);
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