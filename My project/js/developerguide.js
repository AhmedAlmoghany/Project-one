$(document).ready(function(){
        $(".loading-page").fadeOut(1000,function(){
            $(".loading-page").removeClass("d-flex")
        });
        

    $("body,html").css("overflowY","auto");
})

$(" #openbar").click(function(){
    $(this).siblings().slideToggle();
})

$("#open-courses").click(function(){
    if($(".content-toggle").css("display")=="none"){
    $("#arrow").fadeOut(200);
    $(".hint").animate({left:"100%"},500)
    $(".content-toggle").addClass("d-block");
    $(".content").animate({width:"100%"},500)
    $(".content").animate({height:390},500)
    $(".bd-example").addClass("d-block"); }
    else{    

    $(".hint").animate({left:"30%"},500)
    $(".bd-example").removeClass("d-block");
    $(".content").animate({width:"0%"},500,function(){
     $("#arrow").fadeIn(500);

    }  );

    $(".content").animate({height:0},500,
    function(){
    $(".content-toggle").removeClass("d-block");
    })}

})
$("#open-links").click(function(){
    if($(".content-toggle2").css("display")=="none"){
    $("#links #arrow").fadeOut(200);
    $(".hint2").animate({left:"100%"},500);
    $(".content-toggle2").addClass("d-block");
    $(".content2").animate({width:"100%"},500)
    $(".content2").animate({height:390},500)
    $(".link-cont").addClass("d-block");
     }
    else{
        $(".hint2").animate({left:"30%"},500)
     $(".link-cont").removeClass("d-block");

    $(".content2").animate({width:"0%"},500,function(){
     $("#links #arrow").fadeIn(500);

    });
    $(".content2").animate({height:0},500,  
    function(){
        $(".content-toggle2").removeClass("d-block");
    })}})
$("#open-event").click(function(){
    
    if($(".content-toggle3").css("display")=="none"){
     $("#events #arrow").fadeOut(200);
    $(".hint3").animate({left:"100%"},500)   
    $(".content-toggle3").addClass("d-block");
    $(".content3").animate({width:"100%"},500,);
    $(".content3").animate({height:390},500);
    $(".event-cont").removeClass("d-none");
    $(".time").animate({width:"100%"},1000);
    $(".time").animate({height:100},1000);

    }
    else{ $(".event-cont").addClass("d-none");
  $(".time").animate({width:"0%"},500);
    $(".time").animate({height:0},500);
    $(".hint3").animate({left:"30%"},500);
   
   
    $(".content3").animate({width:"0%"},500,function(){
     $("#events #arrow").fadeIn(500);

    });
    $(".content3").animate({height:0},500,  
    function(){
        $(".content-toggle3").removeClass("d-block");
    })}})



   $("#open-form").click(function(){
    if($(".content-toggle4").css("display")=="none"){
    $("#team #arrow").fadeOut(200);
         $(".form-cont").removeClass("d-none")
   
    $(".hint4").animate({left:"100%"},500)
    $(".content-toggle4").addClass("d-block");
    $(".content4").animate({width:"100%"},500)
    $(".content4").animate({height:390},500)
    
    }
    else{
            $(".form-cont").addClass("d-none")

    $(".hint4").animate({left:"30%"},500)
    
   
    $(".content4").animate({width:"0%"},500,function(){
     $("#team #arrow").fadeIn(500);

    });
    $(".content4").animate({height:0},500,  
    function(){
        $(".content-toggle4").removeClass("d-block");
    })
        
    }})
/*count down for event */
let seconds =1000 , mintues=60* seconds , hours=60* mintues, days=24*hours;


let countDown = setInterval(function(){
    let targetDate = new Date ("Dec 19, 2019 15:37:25");
let currentDate= new Date().getTime();
let dif= targetDate -currentDate;
    
    let ramainDays = Math.floor(dif/days);
    let ramainHours = Math.floor((dif % days)/hours);
    let ramainMinutes = Math.floor((dif % hours)/mintues);
    let ramainSeconds = Math.floor((dif % mintues)/seconds);
   
    $("#days").text(`- ${ramainDays}D`);
    $("#hours").text(`0- ${ramainHours}h`);
    $("#minutes").text(`0- ${ramainMinutes}m`);
    $("#seconds").text(`0-${ramainSeconds}s`);
    
    
},1000);
/*team profiles */
var firstName =document.getElementById("firstName");
var lastName=document.getElementById("lastName");
var email=document.getElementById("email");
var gitHub=document.getElementById("gitHub");
var title=document.getElementById("title");
var teamMembers;
var imag=document.getElementById("customFile");
var addProfile=document.getElementById("addProfile");
var input=document.getElementsByClassName("form-control");
var removeBtn=document.getElementById("del");
var editBtn=document.getElementById("edit");
var currentIndex=0;
var searchInput=document.getElementById("search-members");
var searchOutput=document.getElementById("searchoutput");


searchInput.onkeyup=function(){ 
    if(searchInput.value==""){
    searchOutput.innerHTML="";}
   else {
       searchMembers(searchInput.value);

   }

}
function searchMembers(term){
        var searchResult="";

    for(var i=0;i<teamMembers.length;i++){
        if(teamMembers[i].memberFirstName.includes(term)){
            searchResult+= `<div class="col-md-4 mt-5">
           <div class="my-img position-relative ">
                  <img src="${teamMembers[i].memberImage}" class="w-75 position-relative" id="im">
                  <div class="layer  rounded w-75 d-flex flex-column align-items-center justify-content-end">
                     <h4 class="bg-dark p-2"> ${teamMembers[i].memberFirstName}${teamMembers[i].memberLastName}</h4>
                      <p class="mt-3">${teamMembers[i].memberTitle}</p>                     
               </div>
                  </div>
          
           <button class="btn btn-outline-primary mt-3 fontSize px-1 "><a href="${teamMembers[i].member}" class="text-decoration-none "><i class="fa fa-github m-2 fa-lg"></i></a></button>
        <button class="btn btn-outline-primary mt-3 fontSize px-3 "><i class="fas fa-envelope"></i></button><br>
        <button id="del" class="btn btn-danger mt-3" onclick="removeMember(${i})">Delete Profile</button>
        <button id="edit" class="btn btn-primary mt-3" onclick="editMember(${i})">Edit Profile</button>
          </div>`
        }
    }
    searchOutput.innerHTML=searchResult;
}
if (localStorage.getItem("teamMembers")==null){
    teamMembers=[];
}
else{
    teamMembers=JSON.parse(localStorage.getItem("teamMembers"));
    displayMembers();
}

addProfile.onclick=function(){
    if (document.getElementById("addProfile").innerHTML=="Add Profile")
    {addMember();
    displayMembers();
    clearInput();
    transfer();
    }
    else {
        submitMember();
         displayMembers();
    clearInput();
    transfer();

    }
    
}
    

function displayMembers(){
    var cols="";
    for(var i=0;i< teamMembers.length;i++){
        cols+= `<div class="col-md-4 mt-5 team" id=${i}>
           <div class="my-img position-relative ">
                  <img  id="im" src="${teamMembers[i].memberImage}" class=" w-75 h-75 position-relative overflow-hidden">
                  <div class="layer  rounded w-75 d-flex flex-column align-items-center justify-content-end">
                     <h4 class="bg-dark p-2"> ${teamMembers[i].memberFirstName}${teamMembers[i].memberLastName}</h4>
                      <p class="mt-3">${teamMembers[i].memberTitle}</p>                     
               </div>
                  </div>
          
           <button class="btn btn-outline-primary mt-3 fontSize px-1 "><a href="${teamMembers[i].member}" class="text-decoration-none "><i class="fa fa-github m-2 fa-lg"></i></a></button>
        <button class="btn btn-outline-primary mt-3 fontSize px-3 "><i class="fas fa-envelope"></i></button><br>
        <button id="del" class="btn btn-danger mt-3" onclick="removeMember(${i})">Delete Profile</button>
        <button id="edit" class="btn btn-primary mt-3" onclick="editMember(${i})">Edit Profile</button>
          </div>`
    }
    document.getElementById("datarow").innerHTML=cols;
}
function addMember(){
     var member={
    memberFirstName:firstName.value,
    membergitHub:gitHub.value,
    memberLastName:lastName.value,
    memberEmail:email.value,
    memberTitle:title.value,
    memberImage:imag.file
}
    teamMembers.push(member);
    localStorage.setItem("teamMembers",JSON.stringify(teamMembers));
    
}
function clearInput(){
    for(var i=0;i<input.length;i++){
        input[i].value="";
    }
        
}
function removeMember(i){
    teamMembers.splice(i,1);
        localStorage.setItem("teamMembers",JSON.stringify(teamMembers));

        displayMembers();

    
}
function editMember(i){
     
    firstName.value=teamMembers[i].memberFirstName;
    lastName.value=teamMembers[i].memberLastName;
    email.value=teamMembers[i].memberEmail;
    title.value=teamMembers[i].memberTitle;
    gitHub.value=teamMembers[i].membergitHub;
    imag.file=teamMembers[i].memberImage;
    document.getElementById("addProfile").innerHTML="Edit profile";
    var editspac =$("#team").offset().top;
    $("html,body").animate({scrollTop:editspac},500);
    currentIndex=i;
}
function submitMember(){
    
    teamMembers[currentIndex].memberFirstName=firstName.value;
    teamMembers[currentIndex].memberLastName=lastName.value;
    teamMembers[currentIndex].memberEmail=email.value;
    teamMembers[currentIndex].membergitHub=gitHub.value;
    teamMembers[currentIndex].memberTitle=title.value;
    teamMembers[currentIndex].memberImage=imag.file;
    addProfile.innerHTML="Add Profile";
    localStorage.setItem("teamMembers",JSON.stringify(teamMembers));
    
}
 function upload(fakepath){
          var splits = fakepath.split('fakepath\\');
          
  imag.file= (splits[1]);   
 }
$("a").click(function(){
    let attrib = $(this).attr("href");
    let circloffset = $(attrib).offset().top;
    $("body,html").animate({scrollTop:circloffset},1000);
})
function transfer(){
    for(var i=0;i< teamMembers.length;i++){
        
        var ind=$(".team").attr("id");
        var space = $(`#${ind}`).offset().top;
        $("body,html").animate({scrollTop:space})
    }
}
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
$(".circleResp").click(function(){
    if($(".content-toggle").css("display")=="none")
    {$(".hint").animate({left:"100%"})
    $(".content-toggle").addClass("d-block");
    $(".content").animate({height:250},500);
    $(".content").animate({width:"100%"},500)
    $(".bd-example").addClass("d-block"); 
    
    }
       else{$(".hint").animate({left:"15%"})
    $(".bd-example").removeClass("d-block");
    $(".content").animate({width:"0%"},500);
    $(".content").animate({height:"0%"},500,function(){
            $(".content-toggle").removeClass("d-block");

    });
    
           
           }
})
$(".circleResp").click(function(){
    if($(".content-toggle2").css("display")=="none")
    {$(".hint2").animate({left:"100%"})
    $(".content-toggle2").addClass("d-block");
    $(".content2").animate({height:250},500);
    $(".content2").animate({width:"100%"},500)
    $(".link-cont").addClass("d-block");

    }
       else{$(".hint2").animate({left:"15%"})
     $(".link-cont").removeClass("d-block");
    
    $(".content2").animate({width:"0%"},500);
    $(".content2").animate({height:"0%"},500,function(){
            $(".content-toggle2").removeClass("d-block");

    });
    
           
           }
}) 
$(".circleResp").click(function(){
    if($(".content-toggle3").css("display")=="none")
    {$(".hint3").animate({left:"100%"})
    $(".content-toggle3").addClass("d-block");
    $(".content3").animate({height:250},500);
    $(".content3").animate({width:"100%"},500)
    $(".time").animate({width:"100%"},2000);
    $(".time").animate({height:100},1000);
    }
        else{
    $(".hint3").animate({left:"15%"},500)
  
    $(".time").animate({width:"0%"},500);
    $(".time").animate({height:0},500);
    $(".content3").animate({width:"0%"},500,function(){

    });
    $(".content3").animate({height:0},500,  
    function(){
        $(".content-toggle3").removeClass("d-block");
    })}})
 $(".circleResp").click(function(){
    if($(".content-toggle4").css("display")=="none"){
    $(".hint4").animate({left:"100%"},500)
    $("#guide").fadeOut(500) ;
    $("#guide").addClass("d-none");
    $(".content-toggle4").addClass("d-block");
    $(".content4").animate({width:"100%"},500)
    $(".content4").animate({height:250},500)
    $(".time").animate({width:"100%"},2000)
    $(".time").animate({height:100},1000)
    }
    else{
    $(".hint4").animate({left:"15%"},500)

    $(".time").animate({width:"0%"},500)
    $(".time").animate({height:0},500)
    $(".content4").animate({width:"0%"},500,function(){

    });
    $(".content4").animate({height:0},500,  
    function(){
        $(".content-toggle4").removeClass("d-block");
    })
        $("#guide").removeClass("d-none");
        $("#guide").fadeIn(2000);   

    }})