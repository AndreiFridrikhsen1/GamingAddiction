const links = ["photos/pic1.jpg", "photos/pic2.jpg", "photos/pic3.jpg", "photos/pic4.jpg", "photos/pic5.jpg","photos/brain.png", "photos/pic6.jpg", "photos/workplace.png","photos/pic8.jpg","photos/pic7.jpg","photos/pic9.jpg", "photos/pic10.jpg", "photos/pic11.jpg", "photos/pic12.jpg", "photos/pic13.jpg", "photos/pic14.png", "photos/pic15.jpg", "photos/pic16.jpg", "photos/pic17.jpg", "photos/pic18.jpg"];
const h3 = document.querySelector("h3");
const img = document.querySelector("img");
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");
const scroll = document.querySelector(".scroll");
let backgrounds = ["url('background/game1.png')", "url('background/game2.png')", "url('background/game3.png')", "url('background/game4.png')", "url('background/game5.png')"];
const body = document.body;
body.style.backgroundImage = "url('background/game1.png')";
body.style.backgroundSize = "92px";
body.style.backgroundRepeat = "repeat-x";
body.style.backgroundPositionY = "-17px"
let i = 0;
img.setAttribute("src", links[i]);

// Function to change image
const changeImage = () => {
    i = (i + 1) % links.length; // Increment i, reset to 0 if it exceeds the array length
    img.setAttribute("src", links[i]);
    body.style.backgroundImage = backgrounds[i % backgrounds.length];
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
    body.style.backgroundImage = backgrounds[i % backgrounds.length];
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

