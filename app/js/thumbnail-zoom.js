let overlay = document.getElementsByClassName("overlay")[0];
let thumbnails = document.getElementsByClassName("accomodation-thumbnail-images");
let popupImage = document.getElementsByClassName("popup-image")[0];
let thumbnail;
let imgSource;

for(thumbnail of thumbnails){
    thumbnail.addEventListener("click", function(){
        overlay.style.display = "block";
        imgSource = this.getAttribute("src");
        popupImage.setAttribute("src", imgSource);
    });
}

overlay.addEventListener("click", function(){
    this.style.display = "none";
});
