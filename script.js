function startStory() {
    document.querySelector(".welcome").style.display = "none";
    document.getElementById("passwordScreen").style.display = "flex";
}

function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const error = document.getElementById("passwordError");

    if (password === "Iloveyou") {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("website").style.display = "block";
    } else {
        error.textContent = "Wrong password... try again ❤️";
    }
}