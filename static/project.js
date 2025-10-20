

function clickedHere(id, url) {
    const element = document.getElementById(id);
    element.style.cursor = "pointer";
    window.location.href = url;
}