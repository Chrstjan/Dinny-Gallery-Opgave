
// 
const myImages = ['Dinny-01.jpg', 'Dinny-02.jpg', 'Dinny-03.jpg', 'Dinny-04.jpg', 'Dinny-05.jpg', 'Dinny-06.jpg', 'Dinny-07.jpg', 'Dinny-08.jpg', 'Dinny-09.jpg'];

// tilgå arrays med nummer .. startende ved 0
console.log(myImages);
console.log(myImages[-1]);



// myImageCount er den plads i arrayet der vises i dom.
let myImageCount = 0;



//myGalleryElement, dom element der skal bruges til at vise billeder i.
let myGalleryElement = document.getElementById("gallery_image");


// myForward dom element der kan klikkes på, når man vil frem i galleri.
let myForward = document.getElementById("nav_arrow_forward");



// event listner som lytter på om myForward bliver klikket på, og trigger en arrowfunction
myForward.addEventListener('click', (e) => {

    myImageCount++; // læg 1 til variablen .. increment by 1

    // error check.. er vi længere end array er langt? start forfra
    if (myImageCount >= myImages.length) {
        myImageCount = 0;
    }

    // ren myImageCount der er steppet 1 frem eller er 0

    showImage();

});





// tilbage pil...
let myBack = document.getElementById("nav_arrow_back");



myBack.addEventListener('click', (e) => {

    myImageCount--; // træk 1 fra variablen .. decrement by 1

    //error check  er vi under 0, så skal vi finde sidste plads i arrayet.
    if (myImageCount < 0) {

        myImageCount = myImages.length - 1;
    }

    showImage();

});


showImage();




// funktion der viser billede i dom, udfra array og image nummer

function showImage() {

    //test
    let myUrl = 'assets/images/gfx/' + myImages[myImageCount];

    myGalleryElement.src = myUrl;
}

