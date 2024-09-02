var sidenav =document.querySelector(".side-navbar")

function shownavbar(){
    sidenav.style.left="0";
}
function closenavbar(){
    sidenav.style.left="-70%";
}



var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
     popupoverlay.style.display="block"
    popupbox.style.display="block"
})


var cancelpopupbutton=document.getElementById("cancel-popup")
cancelpopupbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container=document.querySelector(".container");
var addbook=document.getElementById("add-book");
var booktitleinput=document.getElementById("book-title-input");
var bookauthorinput=document.getElementById("book-author-input");
var shortdescriptioninput=document.getElementById("short-description-input");
var linkpageinput=document.getElementById("link-page");


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>
    <h5>${bookauthorinput.value}</h5>
    <p>${shortdescriptioninput.value}</p>
    <button onclick="linkbook()">${linkpageinput.value} Read Book</button>
    <button onclick="deletebook(event)">Delete</button>`
    
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none";


    
localStorage.setItem('booktitle',booktitleinput);
localStorage.setItem('bookauthor',bookauthorinput);
localStorage.setItem('shortdescription',shortdescriptioninput);
localStorage.setItem('linkbook',linkpageinput);
    
})
    
function deletebook(event){
    event.target.parentElement.remove()
}
function gotolink(link){
  console.log(link.value);
  window.open(link.value);
}

let popup=document.getElementById("popup");
function openpopup(){
    popup.classList.add("open-popup");
}
function closepopup(){
    popup.classList.remove("open-popup");
}





