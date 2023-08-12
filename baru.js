var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
let gettombol = document.getElementById("tentang");



function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var tentang = document.getElementById("tentang");
var target = document.querySelector("#about-me");

tentang.addEventListener("click", function(event){
      event.preventDefault();
      target.scrollIntoView ({behavior:"smooth"});
});

document.getElementById("port").addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "baru-p.html";
});
