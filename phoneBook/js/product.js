var productNameInp=document.getElementById("product name");
var productPriceInp=document.getElementById("product price");
var productCompanyInp=document.getElementById("product company");
var productDescInp=document.getElementById("product desc");
var productsContainer;
var myBtn=document.getElementById("mybtn");
var input=document.getElementsByClassName("form-control");
var removeBtn=document.getElementById("delet");
var currentIndex=0;
var searchInput=document.getElementById("search");
var searchOutput=document.getElementById("searchoutput");

search.onkeyup=function(){ if(searchInput.value==""){
    searchOutput.innerHTML="";}
   else {
       searchProduct(searchInput.value);

   }

}
function searchProduct(term){
        var searchResult="";

    for(var i=0;i<productsContainer.length;i++){
        if(productsContainer[i].name.includes(term)){
            searchResult+='<div class="col-md-3" ><h2 id="productname">'+productsContainer[i].name+'</h2> <span id="productprice">'+productsContainer[i].price+'</span> <p id="productcompany">'+productsContainer[i].company+'</p> <p id="productdesc">'+productsContainer[i].desc+'</p><button id="delet" class="btn btn-danger" onclick="removeProduct('+i+')">Delete Product</button><button id="updatebtn" class="btn btn-info" onclick="updateProduct('+i+')"> Update Product</button></div>'
        }
    }
    searchOutput.innerHTML=searchResult;
}
if (localStorage.getItem("productscontainer")==null){
    productsContainer=[];
}
else{
    productsContainer=JSON.parse(localStorage.getItem("productscontainer"));
    displayProduct();
}

myBtn.onclick=function(){
    if (document.getElementById("mybtn").innerHTML=="Add Product")
    {addProducts();
    displayProduct();
    clearInput();}
    else {
        submitProduct();
         displayProduct();
    clearInput();
    }
    
}
    

function displayProduct(){
    var cols="";
    for(var i=0;i<productsContainer.length;i++){
        cols+='<div class="col-md-3" ><h2 id="productname">'+productsContainer[i].name+'</h2> <span id="productprice">'+productsContainer[i].price+'</span> <p id="productcompany">'+productsContainer[i].company+'</p> <p id="productdesc">'+productsContainer[i].desc+'</p><button id="delet" class="btn btn-danger" onclick="removeProduct('+i+')">Delete Product</button><button id="updatebtn" class="btn btn-info" onclick="updateProduct('+i+')"> Update Product</button></div>'
    }
    document.getElementById("datarow").innerHTML=cols;
}
function addProducts(){
     var product={
    name:productNameInp.value,
    price:productPriceInp.value,
    company:productCompanyInp.value,
    desc:productDescInp.value
    
}
    productsContainer.push(product);
    localStorage.setItem("productscontainer",JSON.stringify(productsContainer));
    
}
function clearInput(){
    for(var i=0;i<input.length;i++){
        input[i].value="";
    }
        
}
function removeProduct(i){
    productsContainer.splice(i,1);
        localStorage.setItem("productscontainer",JSON.stringify(productsContainer));

        displayProduct();

    
}
function updateProduct(i){
    productNameInp.value=productsContainer[i].name;
    productPriceInp.value=productsContainer[i].price;
    productCompanyInp.value=productsContainer[i].company;
    productDescInp.value=productsContainer[i].desc;
    document.getElementById("mybtn").innerHTML="update product";
    currentIndex=i;
}
function submitProduct(){
    
    productsContainer[currentIndex].name=productNameInp.value;
    productsContainer[currentIndex].price=productPriceInp.value;
    productsContainer[currentIndex].company=productCompanyInp.value;
    productsContainer[currentIndex].desc=productDescInp.value;
    myBtn.innerHTML="Add Product";
    localStorage.setItem("productscontainer",JSON.stringify(productsContainer));
    
}
