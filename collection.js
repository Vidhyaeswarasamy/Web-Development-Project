let availableKeywords=['Wings Of Fire','Romeo and juliet','Julius Caesar','Gitanjali','Discovery of India','Freedom at Midnight','cinderalla','The Little Prince','Sleeping Beauty','Happy Days','Yoga Books'];

const resultsbox=document.querySelector(".result-box");
const inputBox=document.getElementById("search");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value
    
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
         return keyword.toLowerCase().includes(input.toLowerCase())
        });

        console.log(result);
    }
    display(result);

    if(!result.length){
        result.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsbox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsbox.innerHTML = '';
}
