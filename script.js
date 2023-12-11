const links = ["photos/pic1.jpg", "photos/pic2.jpg", "photos/pic3.jpg"];
const h3 = document.querySelector("h3");
const img = document.querySelector("img");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const scroll = document.querySelector(".scroll");

let i = 0;
img.setAttribute("src", links[i]);

// Function to change image
const changeImage = () => {
    i = (i + 1) % links.length; // Increment i, reset to 0 if it exceeds the array length
    img.setAttribute("src", links[i]);
};

// Next button click event
next.addEventListener("click", function() {
    h3.style.visibility="hidden";
    changeImage(); // Use the changeImage function
});
 
// Previous button click event
previous.addEventListener("click", function() {
    h3.style.visibility="hidden";
    i = (i - 1 + links.length) % links.length; // Decrement i, wrap around if it goes below 0
    img.setAttribute("src", links[i]);
});

let intervalId = null;
scroll.addEventListener("click", function() {
    h3.style.visibility="hidden";
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        scroll.textContent = "Scroll automatically"; // Change button text back
    } else {
        intervalId = setInterval(changeImage, 3000); // Change image every 3 seconds
        scroll.textContent = "Stop scrolling"; // Change button text
    }
});
const section = document.querySelector("section");
const h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
   section.style.visibility = "visible";
})
const h2 = document.querySelector("h2");
h2.addEventListener("click", function(){
    section.style.visibility = "hidden";
})

