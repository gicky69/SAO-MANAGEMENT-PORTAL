const goBack = document.getElementById("btn-goBack");
const signUp = document.getElementById("btn-signUp");
const forgotPassword = document.getElementById("link-forgotPassword");

const divSignIn = document.getElementsByClassName("signIn")[0];
const divSignUp = document.getElementsByClassName("signUp")[0];
const rdSignIn = document.getElementsByClassName("right-signIn")[0];
const lsdSignIn = document.getElementsByClassName("left-signIn")[0];
const lsdSignUp = document.getElementsByClassName("left-signUp")[0];
const rdSignUp = document.getElementsByClassName("right-signUp")[0];
const lsdForgotPassword = document.getElementsByClassName("left-forgotPassword")[0];

// Set initial active class
divSignIn.classList.add("active");

goBack.addEventListener("click", changeToSignIn);
signUp.addEventListener("click", changeToSignUp);
forgotPassword.addEventListener("click", changeToForgotPassword);


function changeToSignUp() {
    if (divSignIn.classList.contains("active")) {
        divSignIn.classList.remove("active");
        lsdSignUp.classList.remove("active");
        rdSignUp.classList.remove("active");
        lsdSignIn.classList.add("active");
        rdSignIn.classList.add("active");
        divSignUp.classList.add("active");
    } else {
        console.log("error in changing div.");
    }
}

function changeToSignIn() {
    if (divSignUp.classList.contains("active")) {
        divSignUp.classList.remove("active");
        rdSignUp.classList.add("active");
        lsdSignUp.classList.add("active");
        lsdSignIn.classList.remove("active");
        rdSignIn.classList.remove("active");
        divSignIn.classList.add("active");
    } else {
        console.log("error in changing div.");
    }
}

function changeToForgotPassword() {
    if (divSignIn.classList.contains("active")) {
        lsdSignIn.style.display = "none";
        lsdForgotPassword.style.display = "block";
    }
}