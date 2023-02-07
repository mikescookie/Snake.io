const hiddeninfo = document.getElementById("hidden-info1");
const showinfo = document.getElementById("show-info1");
const hiddeninfo2 = document.getElementById("hidden-info2");
const showinfo2 = document.getElementById("show-info2"); 
const hiddeninfo3 = document.getElementById("hidden-info3");
const showinfo3 = document.getElementById("show-info3"); 


showinfo.addEventListener("click", function(){
    if(hiddeninfo.style.display === "none"){
        hiddeninfo.style.display = "block";
        showinfo.innerHTML = "hide info";  
    }
    else {
        hiddeninfo.style.display = "none";
        showinfo.innerHTML = "Show Me";
    }
})
showinfo2.addEventListener("click", function(){
    if(hiddeninfo2.style.display === "none"){
        hiddeninfo2.style.display = "block";
        showinfo2.innerHTML = "hide info";  
    }
    else {
        hiddeninfo2.style.display = "none";
        showinfo2.innerHTML = "Show Me";
    }
})
showinfo3.addEventListener("click", function(){
    if(hiddeninfo3.style.display === "none"){
        hiddeninfo3.style.display = "block";
        showinfo3.innerHTML = "hide info";  
    }
    else {
        hiddeninfo3.style.display = "none";
        showinfo3.innerHTML = "Show Me";
    }
})
