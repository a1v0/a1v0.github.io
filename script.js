const headerLinks = document.getElementsByClassName("link-header");
for (let i = 0; i < headerLinks.length; ++i) {
    headerLinks[i].addEventListener("click", toggleDisplay);
}

function toggleDisplay(event) {
    const currentState =
        event.target.parentNode.children[1].style.display === "block";
    const infoboxes = document.getElementsByClassName("infobox");
    for (let i = 0; i < infoboxes.length; ++i) {
        infoboxes[i].style.display = "none";
    }
    event.target.parentNode.children[1].style.display = currentState
        ? "none"
        : "block";
}
