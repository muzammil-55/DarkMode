let b=document.querySelector("#mode");
let a=document.querySelector("body");
let currentmode="light";
b.addEventListener("click",()=>{
    console.log("you have clicked:");
    if(currentmode==="light"){
        currentmode="dark";
        a.classList.add("dark");
        a.classList.remove("light");
    }else{
        currentmode="light"
        a.classList.add("light");
        a.classList.remove("dark");
    }
});
