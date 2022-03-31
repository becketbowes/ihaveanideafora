async function sendMessageHandler() {
    const text = document.querySelector('#messagefield').value.trim();
    const receiverKey = document.querySelector('#user_id').value;

    // if (text) {
    //     const response = await fetch('/api/comments', {
    //         method: 'post',
    //         body: JSON.stringify({ text, ideakey }),
    //         headers: { 'Content-Type': 'application/json'}
    //     });

    //     if (response.ok) {
    //         document.location.reload();
    //     } else {
    //         alert(response.statusText);
    //     }
    // }
}

document.querySelector('#messagesubmit').addEventListener("click", sendMessageHandler);