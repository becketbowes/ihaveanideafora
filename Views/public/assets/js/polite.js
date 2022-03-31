// on click 'proceedtoquiz' res.render politetest.handlebars

// const res = require("express/lib/response");

function toQuizButtonHandler() {
    document.location.assign('/politetest');
}

document.querySelector('#proceedtoquiz').addEventListener("click", toQuizButtonHandler);