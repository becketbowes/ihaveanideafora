function openIdeas() {
    const div = document.querySelector('#previous-ideas');
    if (div.style.display = "none") {
        div.style.display = "block"
        document.querySelector('#previous').addEventListener("click", openIdeas);
    } else {
        div.style.display = "none";
    }
}

document.querySelector('#previous').addEventListener("click", openIdeas);