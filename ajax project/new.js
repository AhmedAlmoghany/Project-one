var links= document.getElementsByClassName("nav-link");
var  searchInput=document.getElementById("searchInp");
var outPut=document.getElementById("newsRow");
var news;
var country='us';
var category='general';
var term;
getNew();
    searchInput.addEventListener("blur",function(){
        term = searchInput.value;
        searchItem();
    })

for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
        e.target.innerHTML=category;
        getNew();
    })
}

function getNew(){
    var req=new XMLHttpRequest();
    var url=`https://newsapi.org/v2/top-headlines?country=`+country+`&category=`+category+`&apiKey=d34d49ce3a794aca80d1ae821239b0eb`
req.open("GET",url) ;   
 req.send();
    req.onreadystatechange=function(){
if(req.readyState==4 && req.status==200){
    news=JSON.parse(req.response);
    news=news.articles;
    displayNew();
}
    
    
}}
function displayNew(){
   var temp="";
    for(var i=0;i<news.length;i++){
        temp+=`<div class="col-md-4">
                <img src="`+news[i].urlToImage+`" class="img-fluid">
                    <h5>`+news[i].title+`</h5>
                        <p>`+news[i].content+`</p>
                    
                    </div>`
    }
    outPut.innerHTML=temp;
}
function searchItem(){
    var req=new XMLHttpRequest();
    var url=`https://newsapi.org/v2/everything?q=`+term+`&from=2019-07-21&sortBy=publishedAt&apiKey=d34d49ce3a794aca80d1ae821239b0eb`
    req.open("GET",url);
    req.send();
    req.onreadystatechange=function(){
        news=JSON.parse(req.response);
        news=news.articles;
        displayNew();
    }
}