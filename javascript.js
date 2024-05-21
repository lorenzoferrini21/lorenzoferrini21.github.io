src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"
src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"

    function openNav() {
    document.getElementById("mySidenav").classList.add('open');
}

    function closeNav() {
    document.getElementById("mySidenav").classList.remove('open');

}

    let dropdown = document.getElementsByClassName("dropdown-button");
    let i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}



    document.addEventListener("DOMContentLoaded", function() {
    let dropdowns = document.getElementsByClassName("buttondropdown");

    for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
} else {
    dropdownContent.style.display = "block";
}
});
}
});



    document.getElementById("returntotop").addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
