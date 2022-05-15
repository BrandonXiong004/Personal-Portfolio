//Carousel JavaScript -- Reference: https://codepen.io/YousifW/pen/LKBxZX
const slider = document.querySelector(".items");
const slides = document.querySelectorAll(".item");
const button = document.querySelectorAll(".button");

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}

const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current - 1;
    next = current + 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

//Form Function
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const error = document.querySelectorAll(".error");

function validateForm() {
    clearMessage();
    let errorFlag = false;

    if (nameInput.value.length < 1) {
        error[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if (!emailIsValid(email.value < 1)) {
        error[1].innerText = "Invalid email address"
        email.classList.add("error-border");
        errorFlag = true;
    }
    if (message.value.length < 1) {
        error[1].innerText = "Please enter your message"
        message.classList.add("error-border");
        errorFlag = true;
    }
    if (!errorFlag) {
        success.innerText = "Success!";
    }
}

//Message clearer for errors
function clearMessage() {
    for (let i = 0; i < error.length; i++) {
        error[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

function emailIsValid(email) {
    let stitch = /\S+@\S+\.\S+/;
    return stitch.test(email);
}


document.getElementById("inquiry-button").addEventListener("click", function () {
    document.querySelector(".pop-up").style.display = "flex";
})

document.getElementById("exit").addEventListener("click", function () {
    document.querySelector(".pop-up").style.display = "none";
})


//Scroll Function
function scrollToElement(pageElement) {
    var positionX = 0;
    var positionY = 0;

    while (pageElement != null) {
        positionX += pageElement.offsetLeft;
        positionY += pageElement.offsetTop;
        pageElement = pageElement.offsetParent;
        window.scrollTo(positionX, positionY);
    }
}

var pageElement = document.getElementById("window-form");
scrollToElement(pageElement);