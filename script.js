
const screen = document.getElementById("screen"); //id
const keys = document.querySelectorAll(".key"); //classe

const deleteBtn = document.getElementById("del");
const resetBtn = document.getElementById("reset");
const equalBtn = document.getElementById("equal");

let operation = ""; 
screen.textContent = "0";

keys.forEach(key =>{
    key.addEventListener("click",()=>{
        operation += key.dataset.value;
        console.log(key.dataset);
        screen.textContent=operation;
    })
} );


deleteBtn.addEventListener("click",()=>{
    operation = operation.slice(0, -1);
    screen.textContent = operation;
});

resetBtn.addEventListener("click",()=>{
    operation="";
    screen.textContent = operation;
})

equalBtn.addEventListener("click",()=>{
    try{
        const safeOp = operation.replace(/x/g, "*");
        operation = eval(safeOp).toString();
        screen.textContent = operation;
    } catch(error){
        
        screen.textContent = "Error";
    }
})