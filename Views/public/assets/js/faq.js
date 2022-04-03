async function messageAdminHandler() {

    const text = document.querySelector('#contactadmin').value.trim();
    const receiver_key = 1;

    if (text) {
        const response = await fetch('/api/conversations', {
            method: 'post',
            body: JSON.stringify({ text, receiver_key }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

function openTextarea() {

    console.log("click")
    const div = document.querySelector('#contact-admin-section');
    if (div.style.display = "none") {
        div.style.display = "block"
        document.querySelector('#contactadminsubmit').addEventListener("click", messageAdminHandler);
    } else {
        div.style.display = "none";
    }
}

document.querySelector('#contactadmin-btn').addEventListener("click", openTextarea);