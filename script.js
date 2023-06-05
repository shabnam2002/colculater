let displayBox = document.querySelector(".display");

function showDisplay(event) {
    const x = event.target.innerText;
    if(displayBox.innerHTML == 0){
        return displayBox.innerHTML = x;
    }
    return displayBox.innerHTML += x;

}


let list = document.querySelectorAll(".show-display");

list.forEach(item => {
    item.addEventListener("click" , showDisplay);
})

document.querySelector(".calculate").addEventListener("click", calculate);
function calculate() {
    const result = displayBox.innerText;
   displayBox.innerText = eval(result);
}

document.querySelector(".all-clear").addEventListener("click", clearAll);
function clearAll(){
displayBox.innerText = 0;
}

document.querySelector(".clear-last").addEventListener("click", clearone);
function clearone(){
    let text = displayBox.innerText;
    if (text.length === 1){
displayBox.innerText = 0;
    } else {
        displayBox.innerText = text.substring(0, text.length - 1);    }
}



