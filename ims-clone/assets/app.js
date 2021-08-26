const links = document.querySelectorAll(".navbar-main .nav-item")
const content = document.querySelectorAll(".collapse-content");

for(let i = 0; i < links.length; i++ ) {
    links[i].addEventListener("mouseover", hoverEnable);
    links[i].addEventListener("mouseout", hoverDisable);

    function hoverEnable() {
        content[i].classList.add("active");
    }
    function hoverDisable() {
        content[i].classList.remove("active");
    }
}


const tab = document.querySelectorAll(".tabs .tab");
const cont = document.querySelectorAll(".tabstyle");
const closeicon = document.getElementById("close");


let flag= [true,true,true,true,true];

for(let i = 0; i < tab.length; i++){

  tab[i].addEventListener("click",addicon);
  
  
  function addicon(){
    if (flag[i] == true){
      cont[i].innerHTML +='<span id="close" class="iconclass"><i class="fas fa-long-arrow-alt-right"></i></span>';
      flag[i] = false;
    } 




  }
}










 
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }


    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }



  window.onload = () => {
    document.getElementById('open').click();
}

