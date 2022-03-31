//if offer-type is paid, make sure amount is selected and then .join offer type with offer amount to return as value to database

//onclick 'submit' put call to make new idea

async function postIdeaHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const coding_languages = document.querySelector('#coding-languages').value;
    const offer_type = document.querySelector('#offer-type').value;
    const offer_value = document.querySelector('#offer-value').value;
    // const offer_type = offer_class + ": " + offer_value;    
    const idea_type = document.querySelector('#idea-type').value;
    const keywords_string = document.querySelector('#keywords').value.trim();
    const keywords = keywords_string;
    const short_text = document.querySelector('#short-text').value.trim();
    const text = document.querySelector('#text').value.trim();

    if (title && short_text && idea_type && offer_type) {
        const response = await fetch('/api/ideas', {
            method: 'post',
            body: JSON.stringify({
                title, coding_languages, offer_type, offer_value, idea_type, keywords, short_text, text
            }),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.assign('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#submit').addEventListener("click", postIdeaHandler);
document.querySelector('#idea-type').selectedIndex = -1;
document.querySelector('#offer-type').selectedIndex = -1;
document.querySelector('#offer-value').selectedIndex = -1;
document.querySelector('#coding-languages').selectedIndex = -1;