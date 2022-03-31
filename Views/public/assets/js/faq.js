//make new conversation with user id and admin id as keys

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
            // send feedback of message sent
        } else {
            alert(response.statusText);
        }
    }
}

// function openTextarea() {

//     const div = document.querySelector('#message_user');
//     if (div.style.display = "none") {
//         div.style.display = "block"
//         document.querySelector('#messagesubmit').addEventListener("click", sendMessageHandler);
//     } else {
//         div.style.display = "none";
//     }
// }

// document.querySelector('#messagesubmit').addEventListener("click", sendMessageHandler);

document.querySelector('#contactadminsubmit').addEventListener("click", messageAdminHandler);