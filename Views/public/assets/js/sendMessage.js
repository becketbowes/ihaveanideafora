async function sendMessageHandler() {

    const text = document.querySelector('#messagefield').value.trim();
    const receiver = document.querySelector('#user_id');
    const receiver_key = receiver.dataset.user;

    if (text) {
        const response = await fetch('/api/conversations', {
            method: 'post',
            body: JSON.stringify({ text, receiver_key }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            console.log(receiver_key + ": " + text);
            document.location.reload();
            // send feedback of message sent
        } else {
            alert(response.statusText);
        }
    }
}

function openTextarea() {

    const div = document.querySelector('#message_user');
    if (div.style.display = "none") {
        div.style.display = "block"
        document.querySelector('#messagesubmit').addEventListener("click", sendMessageHandler);
    } else {
        div.style.display = "none";
    }
}

// document.querySelector('#messagesubmit').addEventListener("click", sendMessageHandler);

document.querySelector('#contact').addEventListener("click", openTextarea);