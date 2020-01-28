let menuBtn = document.getElementById("menu-btn");
let subMenu = document.getElementsByClassName("sub-menu")[0];

menuBtn.addEventListener("click", function(event){
    //subMenu.classList.toggle("d-block");

    event.preventDefault();

    if (!subMenu.classList.contains('d-block')) {
        subMenu.classList.add('d-block');
        subMenu.style.height = 'auto';

        let height = subMenu.clientHeight + "px";

        subMenu.style.height = '0px';

        setTimeout(function () {
            subMenu.style.height = height;
        }, 0);
        } 
        else {
            subMenu.style.height = '0px';
            subMenu.addEventListener('transitionend', function () {
                subMenu.classList.remove('d-block');
            }, 
        {
            once: true
        });
    }
});
