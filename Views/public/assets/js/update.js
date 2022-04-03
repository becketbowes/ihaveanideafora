async function update() {
    const picture = "";
    const aboutme = document.querySelector('#aboutme-text').value.trim();
    const name = document.querySelector('#update-username').value.trim();
    const role = document.querySelector('#update-role').value.trim();

    if (name && role) {
        const response = await fetch('/user-update', {
            method: 'put',
            body: JSON.stringify({ aboutme, name, role }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.assign('/user');
            // console.log("success")
        } else {
            alert(response.statusText);
        }
    }

}

function setRole() {
    const oldRole = document.querySelector('#update-role').dataset.role;
    
    if (oldRole === "inventor" || oldRole === "Inventor") {
        document.querySelector('#update-role').selectedIndex = 0;
    } else if (oldRole === "coder" || oldRole === "Coder") {
        document.querySelector('#update-role').selectedIndex = 1;
    } else if (oldRole === "both" || oldRole === "Both") {
        document.querySelector('#update-role').selectedIndex = 2;
    } else {
        document.querySelector('#update-role').selectedIndex = -1;
    }
}

setRole();
document.querySelector('#update-user-info').addEventListener('click', update);
