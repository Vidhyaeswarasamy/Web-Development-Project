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


var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var shortdescriptioninput = document.getElementById("short-description-input");

// Load existing books from local storage
window.onload = function() {
    var books = JSON.parse(localStorage.getItem("books")) || [];
    books.forEach(function(book) {
        displayBook(book);
    });
};

// Add book event listener
addbook.addEventListener("click", function(event) {
    event.preventDefault();
    
    var book = {
        title: booktitleinput.value,
        author: bookauthorinput.value,
        description: shortdescriptioninput.value
    };
    
    // Store in local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    
    // Display the book
    displayBook(book);

    // Clear inputs
    booktitleinput.value = '';
    bookauthorinput.value = '';
    shortdescriptioninput.value = '';

    // Close popup
    popupoverlay.style.display = "none";
    popupbox.style.display = "none";
});

// Function to display a book
function displayBook(book) {
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        <p>${book.description}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;
    container.append(div);
}

// Delete book function
function deletebook(event) {
    var bookContainer = event.target.parentNode;
    bookContainer.remove();

    // Update local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];
    books = books.filter(book => {
        return book.title !== bookContainer.querySelector('h1').innerText;
    });
    localStorage.setItem("books", JSON.stringify(books));
}


  function deletebook(event){
  event.target.parentElement.remove()
  }





