var webName=document.getElementById("Name");
var webUrl=document.getElementById("url");
var visitButton=document.getElementById("visit");
var deleteButton=document.getElementById("delete");
var outPut=document.getElementById("output");
var submitButton=document.getElementById("submit");
var nameAlert=document.getElementById("name-alert");
var urlAlert=document.getElementById("url-alert");
var index;
var webArray;
if(localStorage.getItem("webarray")==null){
    webArray=[];
}
else{
    webArray=JSON.parse(localStorage.getItem("webarray"));
    displayWebsite();
}

submitButton.onclick=function(){
    if(webName.value==""||webUrl.value==""){
        nameAlert.classList.add("show");
        urlAlert.classList.add("show");
    }
  else{ addWebsite();
    displayWebsite();
        clearForm();}

}

function addWebsite(){
    var webObject={
    websiteName:webName.value,
    websiteUrl:webUrl.value
}
webArray.push(webObject);
    localStorage.setItem("webarray",JSON.stringify(webArray));
}
function displayWebsite(){
    var row="";
    for(var i=0;i<webArray.length;i++){
        row+='<div class="container gray mt-5"><div class="row mb-5 "><div class="col-md-3">'+webArray[i].websiteName+'</div><div class="col-md-3"><a href="http://'+webArray[i].websiteUrl+'" target="_blank"><button id="visit" class="btn btn-primary mr-3 ">visit</button></a><button onclick="deleteWeb('+i+')" id="delete" class="btn btn-danger">delete</button></div></div></div>'
    }
    outPut.innerHTML=row;
}
function deleteWeb(index){
    webArray.splice(index,1);
    localStorage.setItem("webarray",JSON.stringify(webArray));
    displayWebsite();
}
function clearForm(){
    var inputs=document.getElementsByClassName("form-control");

    for(var i=0;i<inputs.length;i++){
        inputs[i].value="";
        
    }
        
}

















