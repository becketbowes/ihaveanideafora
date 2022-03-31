async function findMessages() {

    const res = await fetch('/postal', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    if (res.ok) {
        // document.location.reload();     
    } else {
        alert(res.statusText);
    }


    // If new message exists (read = false), displays icon and timestamps and sender name, links to message
    // If message link selected, display message, set to read to true
    // setinterval to check findMessages();

    // future goal: (if newmessages.length), homepage replaces "user" with "unread messsages"

}


findMessages();