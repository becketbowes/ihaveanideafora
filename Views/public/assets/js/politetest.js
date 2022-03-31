//on click 'submitbutton' if textarea .basketarea.value.trim() === rottonbananas res.render composepage else return error


function toPostButtonHandler() {
    const answer = document.querySelector('textarea[name="basket"]').value.replace(/\s+/g, '').toLowerCase();

    if (answer === "rottenbananas" || answer === "bananas" || answer === "banana"){
        document.location.assign('/compose');
    } else {
        alert("Be sure to read our whole notice on politeness.")
    }
}

function toPoliteButtonHandler() {
    document.location.assign('/polite');
}

document.querySelector('#gotopost').addEventListener("click", toPostButtonHandler);
document.querySelector('#goback').addEventListener("click", toPoliteButtonHandler);