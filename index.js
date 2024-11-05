function next(nextId) {
    window.location.href = nextId + ".html";
}

function updateButtonText() {
    const button = document.querySelector('.click');
    if (window.innerWidth <= 600) button.textContent = "터치하여 계속하기";
    else button.textContent = "클릭하여 계속하기";
}
updateButtonText();
window.addEventListener('resize', updateButtonText);

function fadeOutAndRedirect() {
    const title = document.getElementById("title");
    const button = document.getElementById("click-button");
    title.classList.add("fade-out");
    button.classList.add("fade-out");

    setTimeout(() => {
        window.location.href = '/main2/main2.html';
    }, 1000);
}
setTimeout(fadeOutAndRedirect, 1500);