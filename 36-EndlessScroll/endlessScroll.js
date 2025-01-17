const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let photosArray = [];

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

const count = 10;
const apikey = "_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

function setAttribute(element, attributes) {
    for(const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function imageLoaded() {
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        console.log("ready", ready);
    }
}

function displayPhotos() {
    totalImages = photosArray.length;

    imagesLoaded = 0;
    // for the next 10 images 

    photosArray.forEach((photo) => {
        const item = document.createElement("a");
        
        setAttribute(item, {
            href: photo.links.html,
            target: "_blank",
        });

        const img = document.createElement("img");
        setAttribute(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });

        img.addEventListener('load', imageLoaded);

        item.append(img);

        imageContainer.append(item);
    });
}


async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("scroll", () =>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight && ready){
        ready = false;
        getPhotos();
    }
});

getPhotos();