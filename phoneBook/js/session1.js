
var productNameInp = document.getElementById("productName");
var productPriceInp = document.getElementById("productPrice");
var productCompanyInp = document.getElementById("productCompany");
var productDescInp = document.getElementById("productDesc");
var addBtn = document.getElementById("addBtn");
var searchInp=document.getElementById("search");
var searchOutput=document.getElementById("searchoutput");
var productsContainer ;
var currentIndex=0;
if(localStorage.getItem("productsContainer") == null)
    {
        productsContainer = [];
    }
else
    {
        productsContainer =JSON.parse( localStorage.getItem("productsContainer"));
        displayData();

    }

searchInp.onkeyup=function(){
    searchFun(searchInp.value);
}
function searchFun(term){
    var searchResult="";
    for(var i=0;i<productsContainer.length;i++)
        {
            if(productsContainer[i].name.includes(term))
                {
                    searchResult+='<div class="col-md-3"> <div class="product"><h3>'+productsContainer[i].name+'</h3><p>'+productsContainer[i].desc+'</p><p class="text-danger">'+productsContainer[i].price+'</p> <p class="text-info">'+productsContainer[i].company+'</p><button class="btn btn-danger" onclick="deleteProduct('+i+')">delete</button></div></div>'
                }
                
        }
    searchOutput.innerHTML=searchResult;
}

addBtn.onclick = function()
{
    if(addBtn.innerHTML=="add product")
   { addProduct();
    displayData();
    clearForm();}
    else {updateProduct();
        displayData();
    clearForm();
    }
    

}

function addProduct()
{
    
    
    var product = 
        {
            name:productNameInp.value,
            price:productPriceInp.value,
            company:productCompanyInp.value,
            desc:productDescInp.value
        }
    productsContainer.push(product);
    
localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
    
}

function displayData()
{
    var cols="";
    for(var i = 0 ; i<productsContainer.length ; i++)
        {
        cols +='<div class="col-md-3"> <div class="product"><h3>'+productsContainer[i].name+'</h3><p>'+productsContainer[i].desc+'</p><p class="text-danger">'+productsContainer[i].price+'</p> <p class="text-info">'+productsContainer[i].company+'</p><button class="btn btn-danger" onclick="deleteProduct('+i+')">delete product</button><button class="btn btn-info" onclick="setProduct('+i+')">update product</button></div></div>'    
        }
    document.getElementById("rowData").innerHTML = cols;
}
function deleteProduct(id)
{
    
    productsContainer.splice(id,1);
localStorage.setItem("productsContainer",JSON.stringify(productsContainer));
    
    displayData();

}
function clearForm()
{
    
   var inputs= document.getElementsByClassName("form-control");
    
    for(var i= 0 ; i <inputs.length ; i++)
        {
            inputs[i].value = "";
        }
}
function setProduct(i){
    productNameInp.value=productsContainer[i].name;
    productPriceInp.value=productsContainer[i].price;
    productCompanyInp.value=productsContainer[i].company;
    productDescInp.value=productsContainer[i].desc;
    addBtn.innerHTML="update product";
    currentIndex=i;
    
}
function updateProduct(){
    productsContainer[currentIndex].name=productNameInp.value;
    productsContainer[currentIndex].price=productPriceInp.value;
    productsContainer[currentIndex].company=productCompanyInp.value;
    productsContainer[currentIndex].desc=productDescInp.value;
    addBtn.innerHTML="add product";
    displayData();
    localStorage.setItem("productsContainer",JSON.stringify(productsContainer));

}











