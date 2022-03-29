// const { json } = require("express/lib/response");

async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.assign('/');
        console.log("logged out");
        json("logged out");
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);