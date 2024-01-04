// THE JAVASCRIPT


//displayModal("Cookie_container");


function displayModal(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("myBody").classList.toggle("noScroll");

}


function displayGallery(id, src, desc) {
    document.getElementById(id).style.display = "block";
    document.getElementById("desc").innerHTML = desc;
    document.getElementById("myBody").classList.toggle("noScroll");
}


function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("myBody").classList.toggle("noScroll");
}