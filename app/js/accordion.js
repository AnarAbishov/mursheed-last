
var acc = document.getElementsByClassName("item_header");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var c = this.children;
    for(i = 0; i < c.length; i++){
      if(c[i].classList.contains("plus")){
         c[i].classList.toggle("activate");
      }
    }
    var panel = this.nextElementSibling;
    if (panel.style.display === "none") {
      panel.style.display = "flex";
    
    } else {
      panel.style.display = "none";
    }
  });
}


