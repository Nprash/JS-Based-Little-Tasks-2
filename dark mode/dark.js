const inputel = document.querySelector(".input");
// console.log(inputel.checked);
const bodyel = document.querySelector("body");

inputel.checked = JSON.parse(localStorage.getItem("mode"));
updatebody();


function updatebody(){
    if(inputel.checked){
        bodyel.style.background = "black";
    }
    else{
        bodyel.style.background= "grey";
    }
}

inputel.addEventListener("input", ()=> {
    updatebody();
    updateLocalStorage();// to store the mode while funct calling it happens
})

// upto now the event is not stored its state

function updateLocalStorage(){  // this will store the event mode in JSON format, later inputel.checked triggred it will get the details from here
    localStorage.setItem("mode", JSON.stringify(inputel.checked));
}