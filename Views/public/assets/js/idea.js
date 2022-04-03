async function addCommentHandler() {
    const text = document.querySelector('#commentfield').value.trim();
    const ideakey = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (text) {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({ text, ideakey }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#commentsubmit').addEventListener("click", addCommentHandler);