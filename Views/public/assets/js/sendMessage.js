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

document.querySelector('#messagesubmit').addEventListener("click", sendMessageHandler);