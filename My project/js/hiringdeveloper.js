$(document).ready(function(){
        $(".loading-page").fadeOut(1000,function(){
            $(".loading-page").removeClass("d-flex")
        });
        

    $("body,html").css("overflowY","auto");
})


$(" #openbar").click(function(){
    $(this).siblings().slideToggle();
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



$(".layer #contact").click(function(){
    let hrefattr = $(this).attr("href");
    let contactOffset = $(hrefattr).offset().top;
    $("body,html").animate({scrollTop:contactOffset},1000);
})




$("#closePop").click(function(){
    $(".announc-job").removeClass("d-block");
    $("body").removeClass("overflow-hidden");
})
$("#openPop").click(function(){
    $(".announc-job").addClass("d-block");
 $("body").addClass("overflow-hidden");

})
 var companyName=$("#companyName"),aboutCompany=$("#aboutCompany"),companyAddress=$("#companyAddress") ,companyWeb=$("#companyWeb") ,jobTitle=$("#jobTitle") ,companyLogo=$("#companyLogo") ,salAry=$("#salary") ,careerLevel=$("#careerLevel"),vacaNcies=$("#vacancies") ,jobType=$("#jobType"),rEq=$("#req") ,rEsp=$("#resp"), experYears=$("#exper");
   var newJobs;

if (localStorage.getItem("newJobs")==null){
     newJobs=[];}

else{
    newJobs=JSON.parse(localStorage.getItem("newJobs"));
    displayJobs();
}

$("#submitJob").click(function(){
    addJob();
    displayJobs();
})
function addJob(){
    
    
  var job={companyname:companyName.val(),aboutcompany:aboutCompany.val(),companyaddress:companyAddress.val(),companyweb:companyWeb.val(),jobtitle:jobTitle.val().toLowerCase(),companylogo:companyLogo.file,salary:salAry.val(),careerlevel:careerLevel.val(),vacancies:vacaNcies.val(),jobtype:jobType.val(),req:rEq.val(),resp:rEsp.val(),experyears:experYears.val()} 
  newJobs.push(job);
             localStorage.setItem("newJobs",JSON.stringify(newJobs));

}                     
 function displayJobs(){
  let cont="", cont2="";
    for(var i=0;i<newJobs.length;i++) {
        cont+=`<div class="test2" id="${i+1}"> <div class="jobhead container w-75">
     <img src="${newJobs[i].companylogo}" class="ml-auto">   
      <h4>${newJobs[i].jobtitle}</h4>
      <span class="text-primary mr-3">${newJobs[i].companyname}</span><span>${newJobs[i].companyaddress}</span>
     
      </div>
       <div class="jobhead container w-75 mt-3">
         <ul>
             <li><span class="font-weight-bold">Experience Needed:</span>${newJobs[i].experyears} </li>
             <li><span class="font-weight-bold">Career Level:</span> ${newJobs[i].careerlevel}</li>
             <li><span class="font-weight-bold">Job Type:</span> ${newJobs[i].jobtype}</li>
             <li><span class="font-weight-bold">Salary:</span> ${newJobs[i].salary}</li>
             <li><span class="font-weight-bold">Vacancies:</span> ${newJobs[i].vacancies}</li>
           </ul>          
          </div>  
          <div class="jobhead container w-75 mt-3">
          <h5>Job Requirements</h5>
          <p>${newJobs[i].req}</p>
          </div>
          <div class="jobhead container w-75 mt-3">
          <h5>Responsibilities</h5>
          <p> ${newJobs[i].resp}</p>
          </div>
          <div class="jobhead container w-75 mt-3">
          <h5>About Company</h5>
         <img src="${newJobs[i].companylogo}" class="float-right mb-auto">
  
          <p>${newJobs[i].aboutcompany}</p>
          </div>
        <button type="button" class="btn btn-danger my-5 mx-auto d-block">Apply For This Job</button></div>`;
        cont2+=`<div class="brdr-bot mt-2 test2"><img src="${newJobs[i].companylogo}" class="float-right mt-2">

          <a href="#" id="${i}">  <h4>${newJobs[i].jobtitle}</h4></a> <span class="d-block">2 days ago</span>
         <span class="font-weight-bold">${newJobs[i].companyname}</span> <span>${newJobs[i].companyaddress}</span>
         <p>${newJobs[i].req}</p>

         </div>`
    }
     $("#fulljob").html(cont);
     $("#jobsresult").html(cont2)
 }



$("#find").click(function(){
var offind=$("#res h4").offset().top;
    $("body,html").animate({scrollTop:offind},1000)
  var word =$("#searchfield").val();
    searchJobs(word);

$("#jobsresult").addClass("d-none");
});


function load(fakepat){
          var splits = fakepat.split('fakepath\\');
          
  companyLogo.file= (splits[1]);   
 }

function searchJobs(keyword){
     var jobResult="";
    for(var i=0;i<newJobs.length;i++){
        if(newJobs[i].jobtitle.includes(keyword)){
    jobResult+= `<div class="brdr-bot mt-2"><img src="${newJobs[i].companylogo}"class="float-right mt-2"> <a href="#">  <h5>${newJobs[i].jobtitle}</h5></a> <span class="d-block">2 days ago</span><span class="font-weight-bold">${newJobs[i].companyname}</span> <span>${newJobs[i].companyaddress}</span><p>${newJobs[i].req}</p></div>`
            
        }

}

$("#jobsresult2").html(jobResult);
}
$("#res h4").click(function(){
    $("#jobsresult").removeClass("d-none");
    $("#jobsresult2").addClass("d-none");
  var off=$("#jobsresult").offset().top;
    $("body,html").animate({scrollTop:off})
})
$(".test2 h4").click(function(){
$(this).siblings().hide();
})