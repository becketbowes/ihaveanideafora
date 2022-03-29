//findOne idea by id and all likes and comments associated with it

//onclick from 'loveit' create new upvote with current user and current articles as keys

//onclick from 'contact' create new conversation with current user and idea user as keys

//on click from 'comment submit' create new comment in the database

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